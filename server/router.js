const express = require('express');
const router = express.Router();
const Data = require('./data.js');
const axios = require('axios');
let encodedAuth = 'IMHOJEONG:3e90cb17dca31b911657b5c61352b09657af8c74'.toString('base64');

let configCodeFrequencyURL = 'https://api.github.com/repos/IMHOJEONG/CDP_Project3/stats/code_frequency';
let configParticipationURL = 'https://api.github.com/repos/IMHOJEONG/CDP_Project3/stats/participation';
let configReposURL = 'https://api.github.com/users/IMHOJEONG/repos';

let configCodeFrequency = {
    method: 'get',
    url: configCodeFrequencyURL,
    headers: { 
      'Accept': 'application/vnd.github.v3+json', 
      'Authorization': `Basic ${encodedAuth}`, 
    }
  };

let configParticipation = {
    method: 'get',
    url: configParticipationURL,
    headers: { 
      'Accept': 'application/vnd.github.v3+json', 
      'Authorization': `Basic ${encodedAuth}`, 
    }
};


let configRepos =  {
    method: 'get',
    url: configReposURL,
    headers: { 
      'Accept': 'application/vnd.github.v3+json', 
      'Authorization': `Basic ${encodedAuth}`, 
    }
};


router.get('/', (req, res) => {
    let gitrepos = { };
    let gitcheck = axios.get("https://api.github.com/repos/IMHOJEONG/CDP_Project3",{
        "Authorization" : "6b1688db457dd3634bed8d8f4f259fba10977848",  
    })
    .then((response)=>{
        // console.log(response.data.name);
        // console.log(response.data);
        gitrepos["title"] = response.data.name;
        gitrepos["avatar_url"] = response.data.owner.avatar_url;
        gitrepos["forks"] = response.data.forks;
        gitrepos["open_issues_count"] = response.data.open_issues_count;
        gitrepos["clone_url"] = response.data.clone_url;
    });

    let users = {};
    let userscheck = axios.get("https://api.github.com/users/IMHOJEONG",{
        "Authorization" : "6b1688db457dd3634bed8d8f4f259fba10977848",  
    })
    .then((response)=>{
        users["html_url"] = response.data.html_url,
        users["name"] = response.data.name;
        users["company"] = response.data.company;
        users["blog"] = response.data.blog;
        users["location"] = response.data.location;
        users["bio"] = response.data.bio;
        users["public_repos"] = response.data.public_repos;
        users["followers"] = response.data.followers;
        users["following"] = response.data.following;
    });

    let noti = [];
    let notifications = axios(configCodeFrequency)
    .then((response)=>{
        // console.log(response.data);
        response.data.forEach((e)=>{
            let date1 = new Date(e[0]*1000);
            let check =date1.getFullYear()+'년' + (date1.getMonth()+1)+ "월 " + date1.getDate()+"일";
            noti.push(check);          
        });
    }).catch((error)=>{
        console.log(error);
    });


    let weeklyparticipates;
    let weeklypariticipations = axios(
        configParticipation
    )
    .then((response)=>{
        weeklyparticipates = response.data.owner;
    }).catch((error)=>{
        console.log(error);
    });

        
    let projects = [];
    let projections = axios(
        configRepos
    )
    .then((response)=>{
        response.data.forEach((e)=>{
            projects.push(e["name"]);
        });
    }).catch((error)=>{
        console.log(error);
    });

    Promise.all(
        [gitcheck, userscheck, notifications,
         projections, weeklypariticipations]
    ).then(()=>{

        res.render("index.ejs", 
        { 
            title : gitrepos["title"],
            forks : gitrepos["forks"],
            avatar : gitrepos["avatar_url"],
            open_issues: gitrepos["open_issues_count"],
            clone_url : gitrepos["clone_url"],
            html_url: users["html_url"],
            name: users["name"],
            company: users["company"],
            blog: users["blog"],
            location: users["location"],
            bio: users["bio"],
            public_repos: users["public_repos"],
            followers: users["followers"],
            following: users["following"],
            noti : noti,
            week: weeklyparticipates,
            project: projects,
        }
    );
    });

    // console.log(notifications);
   
    // res.render('index.html'. {});
});

// router.get('/', (req, res) => {
//     res.render();
// });


router.get('/delete-data', ( req, res) => {

    Data.deleteOne({})
    .then(
        todo => {
            console.log(todo)
            res.render('main')
        }
    )
    .catch(
        err => console.log(err)
    );
})

router.get('/show-data', (req,res)=>{

    Data.find({})
    .then(
        todo => {console.log(todo)
        res.render('main')
    }).catch(
        err => console.log(err)
    );

});

router.get('/make-data', (req, res)=> {
    let data = new Data({
        name: 'dlaghwjd',
        data: 'To first Project',
    });
    data.save((err, book)=>console.log(book));
});

module.exports = router;