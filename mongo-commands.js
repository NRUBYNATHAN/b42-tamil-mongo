// mongosh

// show dbs 

// use local 

// use b42wd2 

// show collections 

db.movies.insertMany([
    {
      "name": "Vikram",
      "poster": "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      "rating": 8.4,
      "summary": "Members of a black ops team must track and eliminate a gang of masked murderers."
    },
    {
      "name": "RRR",
      "poster": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      "rating": 8.8,
      "summary": "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
    },
    {
      "name": "Iron man 2",
      "poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 7,
      "summary": "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      "name": "No Country for Old Men",
      "poster": "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      "rating": 8.1,
      "summary": "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      "name": "Jai Bhim",
      "poster": "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      "summary": "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      "rating": 8.8
    },
    {
      "name": "The Avengers",
      "rating": 8,
      "summary": "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      "poster": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      "name": "Interstellar",
      "poster": "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      "rating": 8.6,
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans."
    },
    {
      "name": "Baahubali",
      "poster": "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      "rating": 8,
      "summary": "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
    },
    {
      "name": "Ratatouille",
      "poster": "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      "rating": 8,
      "summary": "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
    },
    {
      "name": "PS2",
      "poster": "https://m.media-amazon.com/images/M/MV5BYjFjMTQzY2EtZjQ5MC00NGUyLWJiYWMtZDI3MTQ1MGU4OGY2XkEyXkFqcGdeQXVyNDExMjcyMzA@._V1_.jpg",
      "summary": "Ponniyin Selvan: I is an upcoming Indian Tamil-language epic period action film directed by Mani Ratnam, who co-wrote it with Elango Kumaravel and B. Jeyamohan",
      "rating": 8
    },
    {
      "name": "Thor: Ragnarok",
      "poster": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
      "summary": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\\n of researchers, to find a new planet for humans.",
      "rating": 8.8
    }
  ]
  )



//refer the site comparision operator 
//https://www.mongodb.com/docs/manual/reference/operator/query-comparison/

// select * from movies => ithu sql method 
db.movies.find({})  //=> ithu mongodb method

//ithu movies la rating 8.8 iruka data vara 
db.movies.find({rating : 8.8})

//ithu movies la rating 8.8 ke mela iruka data vara 
db.movies.find({rating : {$gt : 8.5}})

//ithu movies la rating 8.8  um athuku mela iruka data vara 
db.movies.find({rating : {$gte : 8.5}})

//ithu movies la rating 8.8 ke kela iruka data vara 
db.movies.find({rating : {$lt : 8.5}})


//ithu movies la rating 8.8 um athuku kela iruka data vara 
db.movies.find({rating : {$lte : 8.5}})

//propogation 
//ithu rating 8.8 ku mela ana enaku name , rating mattum kattuna pothum aptina
db.movies.find({rating : {$gt : 8.5}},{name:1,rating : 1})

//ithu rating 8.8 ku mela ana enaku name , rating mattum katta vena  aptina
db.movies.find({rating : {$gt : 8.5}},{name:0,rating : 0})
 
//apparam mix panni solla mutiyathu ❌
db.movies.find({rating : {$gt : 8.5}},{name:1,rating : 0})

//id ku mattum mix panni sollalam✅
db.movies.find({rating : {$gt : 8.5}},{_id : 0,name:1,rating : 1})



//ithu rating 7,8.8,8 iruka movies vara 
db.movies.find( { rating: { $in: [ 7,8.8,8] } })

//ithu rating 7,8.8,8 illatha movies vara 
db.movies.find( { rating: { $nin: [ 7,8.8,8] } })

//ithu movies la exact ah 8 rating iruka movie vara
db.movies.find({rating : {$eq : 8}})


//ithu movies la  8 illama rating iruka movie vara
db.movies.find({rating : {$ne : 8}})

//movie with rating range 8.5 ku mela 9 ku ulla iruka data vara
db.movies.find({rating : {$gte : 8.5,$lte : 9}})

//movie with rating range 8.5 ku mela 9 ku illama matha  data vara
db.movies.find({rating : {$not :{$gte : 8.5,$lte : 9}}})

//ithu enna na rating vachi assenting order la vara 
db.movies.find({},{_id : 0,name : 1,rating : 1}).sort({rating: 1})

//ithu enna na rating vachi dessenting order la vara 
db.movies.find({},{_id : 0,name : 1,rating : 1}).sort({rating: -1,name : 1})

//sort panarom athukulla name vachi marupatiyum sort panrom
db.movies.find({},{_id : 0,name : 1,rating : 1}).sort({rating: -1,name : 1})

// ithu enna na top 3 mattum vara
db.movies.find({},{_id : 0,name : 1,rating : 1}).sort({rating: -1}).limit(3)

// ithu enna na top 3  vittutu atutha 3 data mattum vara
db.movies.find({},{_id : 0,name : 1,rating : 1}).sort({rating: -1}).limit(3).skip(3)

  //ippo ubdate panarthu ella documents layum english language sekka
  db.movies.updateMany({},{$set : {language : "english"}})

  //ippo name : ps2 va vera name update panna
  db.movies.updateMany({name: 'PS2'},{$set : {name: "varisu"}})

  // mothama delete panarthu epti
  db.movies.deleteOne({})

  //oru document mattum delete panrathu epti 
  db.movies.deleteOne({name : "PS2"})

  //-----------------------------------------------------
  
//another collection
db.orders.insertMany([
    { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
    { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
    { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
    { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
    { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
    { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
  ])
  //ithu enna na aggregate function panni quantity panarathu
  //stage 1
  db.orders.aggregate([
    {$match : {status: "urgent"}}])
//stage 2
    db.orders.aggregate([
        {$match : {status: "urgent"}},
    {$group : {_id : "$productName",total : {$sum :"$quantity"}}}
  ])

  db.movies.aggregate([
    {"$group" : { "_id": "$rating", "count": { "$sum": 1 } } },
    {"$match": {"_id" :{ "$ne" : null } , "count" : {"$gt": 1} } }, 
    {"$project": {"rating" : "$_id", "_id" : 0} }
]);
db.movies.deleteMany({rating : "$_id"})