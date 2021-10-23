$(function() {

    $.ajax({ //CORS probleemid
        dataType: "json",
        url: "https://pastebin.com/raw/jzwVCaEi",
        headers: {"Access-Control-Allow-Origin": "https://pastebin.com"},
        success: function(data){
            renderPosts(data)
        }
    });

    function renderPosts(data){
        var posts = [];
        $.each(data.posts, function(index, obj) {
            let img = ""
            if (obj.image){
                img = "<img src=\""+obj.image+"\">"
            }
            let content = `
            <div class="post">
                <div class="post-header">
                    <img class="profile_pic" src="https://miro.medium.com/max/256/0*vuQRIjTuwmZ7r6em.jpg" alt="profiilikas">
                    <p>${obj.time_created}</p>
                </div>
                <div class="post-content">
                    ${img}
                    <h3>${obj.content}</h3>
                    <button>&#128077;</button>
                </div>
            </div>
            `
            posts.push(content);
        });
        
        $(".container").html(posts.join(""))
    }

    //right now for test purposes only
    data = {
        "posts":[
            {
                "content":"Have a nice day!",
                "author":"kitkat",
                "time_created":"Sep 20, 2020 14:15",
                "image":"https://cdn.pixabay.com/photo/2019/02/19/19/45/thumbs-up-4007573_960_720.png"
            },
            {
                "content":"WE ARE DOOMED!",
                "author":"mr_expert",
                "time_created":"Apr 15, 2016 23:59",
                "image":"https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Doom_Cover.jpg/220px-Doom_Cover.jpg"
            },
            {
                "content":"Do anybody have any leftover food to share with me? I'm hungry.",
                "author":"wonderwoman",
                "time_created":"Oct 18, 2021 10:06"
            },
            {
                "content":"What tree is it?",
                "author":"natualguy",
                "time_created":"Mar 31, 2021 10:12",
                "image":"https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Eucalyptus_Rainbow_4_650x.jpg?v=1627506621"
            },
            {
                "content":"I'm moving out, so two cute puppies needs new home. Call 900 2255 for adoption.",
                "author":"ulrich",
                "time_created":"Oct 17, 2021 14:00",
                "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_e7AaWXpeIn8xyWSAb0zZUBgu7oRI6vWDMw&usqp=CAU"
            },
            {
                "content":"Happy new Year!",
                "author":"lets_celebrate",
                "time_created":"Jan 1, 2021 00:02"
            },
            {
                "content":"Somebody stole my bike, contact me 900 2266. Finder will be rewarded!",
                "author":"sportsman",
                "time_created":"Sep 1, 2021 17:50",
                "image":"https://target.scene7.com/is/image/Target/GUEST_1b415728-8c05-4053-aa3f-94b22b8bdf1d?wid=488&hei=488&fmt=pjpeg"
            },
            {
                "content":"Going live in 3 min, join with our Minecraft server",
                "author":"UberGamez",
                "time_created":"Oct 23, 2021 19:57",
                "image":"https://res.cloudinary.com/practicaldev/image/fetch/s--SuPYh5tt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1u0yqb2yb65w34kcbemi.png"
            },
            {
                "content":"Greatest meme of all",
                "author":"memer",
                "time_created":"Jun 20, 2021 4:20",
                "image":"https://scontent-lhr8-2.xx.fbcdn.net/v/t1.15752-9/234888186_192636792885300_5037115517616815661_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Ts10KTZ2F7wAX8w0pUt&_nc_ht=scontent-lhr8-2.xx&oh=9f6468a8364ec212e96cf1475ff3656b&oe=619B977D"
            },
            {
                "content":"I just got covid-19 vaccinated. In your face antivaccers!",
                "author":"sosalty",
                "time_created":"Mar 9, 2021 11:11"
            }
        ]
    }

    renderPosts(data)
});