const blogData = {
    "title":"1,000 days of freeCodeCamp",
    "author": {
        "name":"Quincy Larson",
        "position":"Teacher",
        "organization":"freeCodeCamp",
        "website":"https://freeCodeCamp.org"
    },
    "date":"July 11, 2017",
    "tags": [
        "Tech",
        "Technology",
        "Startup",
        "Life",
        "Design"
    ],
    "likeCount":1827,
    "content": [
        {
            "paragraph": "Today, the freeCodeCamp community turns 1,000 days old. We've accomplished a lot together in that time:"
        },
        {
            "list": [
                "6,000+ campers have gotten their first developer job.",
                "8,000+ other campers — who already had developer jobs — have used their new skills to get promoted or transition into even better jobs.",
                "Campers now code together at freeCodeCamp study groups in 2,000+ cities around the world.",
                "Together, campers have built open source tools used by dozens of nonprofits.",
                "The community now runs Medium's largest technology publication.",
                "The community now runs a popular YouTube channel.",
                "Thousands of people get help with coding every day on the freeCodeCamp forum."
            ]
        },
        {
            "paragraph":"1,000 days ago today, I launched a prototype from a desk in my closet. I wasn't sure whether anyone would want to come code with me."
        },
        {
            "paragraph":"Well today, freeCodeCamp is a community of more than a million campers, driven by the contributions of thousands of passionate volunteers."
        },
        {
            "paragraph":"Thanks to the efforts of the community, anyone on Earth with an internet connection can now learn to code for free, at their own pace. freeCodeCamp has become a proven path to a first developer job."
        },
        {
            "paragraph":"And we're just getting started. Here are some of our goals for the next 1,000 days of freeCodeCamp:"
        },
        {
            "list":[
                "An expanded curriculum that covers topics like testing and security, with additional certificates",
                "A coding interview preparation tool with thousands of algorithm and data structure challenges, and hundreds of projects for extra practice",
                "Concept guides for important subjects like math, computer science, and design, and advanced topics like machine learning and blockchain",
                "Dozens more Open Source for Good tools, which will save nonprofits millions of dollars in software costs"
            ]
        },
        {
            "paragraph":"All of this — including the verified certificates — will remain 100% free."
        },
        {
            "paragraph":"freeCodeCamp is a donor-supported nonprofit. If you want to help us improve even faster, you can help us cover servers and other costs by setting up a donation you can afford."
        },
        {
            "paragraph":"Thanks for being part of the freeCodeCamp community."
        },
        {
            "paragraph":"Here's to another exciting 1,000 days!"
        }
    ],
    "comments":[
        {
            "author":"Jake Casey",
            "date":"July 11, 2017",
            "likeCount":24,
            "content":[
                "I wanted to give you a big thanks, man. Congratulations. FCC has been a constant partner on my journey of learning code. I occasionally get side-tracked, working on my own stuff, but I think that is part of the beauty of FCC. You learn something and go Man, I could use this to build AWESOME stuff. And then you go build it. Then you come back and discover something new. For me the process keeps repeating, and I keep getting better, learning new technologies, and building better things.",
                "In the end, that's what it's all about right?"
            ]
        },
        {
            "author":"Roberto Peruzzo",
            "date":"July 11, 2017",
            "likeCount":11,
            "content":[
                "Awesome! You are a pioneer because you are creating a brand new way to make web programming accessible to everyone. Respect! ;)"
            ]
        },
        {
            "author":"Charles Martin",
            "date":"July 12, 2017",
            "likeCount":11,
            "content":[
                "Keep up the good work Quincy and team! You have created an excellent product which is re-imagining education. If only there were more hours in the day then I would get my certificates quicker!"
            ]
        },
        {
            "author":"satenndrra",
            "date":"July 12, 2017",
            "likeCount":9,
            "content":[
                "Awesome! Congratulations to the whole FreeCodeCamp team, including all the campers :)",
                "One thing you didn't mention — FreeCodeCamp's source code repository (the MERN webapp) is the most starred repository on Github at 291K stars!",
                "https://github.com/search?q=stars:%3E1&s=stars&type=Repositories"
            ]
        }
    ]
}
function commentDataAuthor (obj){
    let authors=[];
    
    for (let key1 in obj){
        if (key1==="comments"){
            for (let i=0;i<obj[key1].length;i++){
                for (let key2 in obj[key1][i]){
                    if (key2==="author")
                        {authors.push(obj[key1][i][key2]);}
                }
            }
        }
    }
    return authors;
}
// console.log(commentDataAuthor(blogData));
//commentDataAuthor(blogData);
///////////////////////////////////////////////////////////////////////////
function commentDataDate (obj){
    let dates=[];
     
    for (let key1 in obj){
        if (key1==="comments"){
            for (let i=0;i<obj[key1].length;i++){
                for (let key2 in obj[key1][i]){
                    if (key2==="date")
                        {dates.push(obj[key1][i][key2]);}
                }
            }
        }
    }
    return dates;
}
// console.log(commentDataDate(blogData));
//commentDataDate(blogData);
///////////////////////////////////////////////////////////////////////////////////
function commentDataLikeCount (obj){
    let likeCounts=[];
     
    for (let key1 in obj){
        if (key1==="comments"){
            for (let i=0;i<obj[key1].length;i++){
                for (let key2 in obj[key1][i]){
                    if (key2==="likeCount")
                        {likeCounts.push(obj[key1][i][key2]);}
                }
            }
        }
    }
    return likeCounts;
}
// console.log(commentDataLikeCount(blogData));
// commentDataLikeCount(blogData);
///////////////////////////////////////////////////////////////////////////////////
function commentDataContent (obj){
    let contents=[];
     
    for (let key1 in obj){
        if (key1==="comments"){
            for (let i=0;i<obj[key1].length;i++){
                for (let key2 in obj[key1][i]){
                    if (key2==="content")
                        {contents.push(obj[key1][i][key2][0]);}
                }
            }
        }
    }
    return contents;
}
// console.log(commentDataContent(blogData));
//commentDataContent(blogData);
///////////////////////////////////////////////////////////////////////////////////
function blogDataContent(obj){
    let blogContents=[];
    for (let key1 in obj){
        if (key1==="content"){
            for (let i=0;i<obj[key1].length;i++){
                for (let key2 in obj[key1][i]){
                    {blogContents.push(obj[key1][i][key2]);}
                }
            }
        }
    }
    return blogContents;
}
//console.log(blogDataContent(blogData));
//blogDataContent(blogData);
///////////////////////////////////////////////////////////////
function createCommentsTable(){
    
    let authorsArr=commentDataAuthor(blogData);
    let datesArr=commentDataDate(blogData);
    let likeCountsArr=commentDataLikeCount(blogData);
    let contentsArr=commentDataContent(blogData);
    
    for (let i=0;i<4;i++) {
                    
            
    let row= document.createElement("tr");
    commentsTable.appendChild(row);
            
    let authorCell=document.createElement("td");
    let dateCell=document.createElement("td");
    let likeCountsCell=document.createElement("td");
    let commentCell=document.createElement("td");
    
    row.appendChild(authorCell);
    row.appendChild(dateCell);
    row.appendChild(likeCountsCell);
    row.appendChild(commentCell);
    
    authorCell.innerHTML= authorsArr[i];
    dateCell.innerHTML=datesArr[i];
    likeCountsCell.innerHTML=likeCountsArr[i];
    commentCell.innerHTML=contentsArr[i];
    
    }
    
    
    }
    
    
    createCommentsTable();