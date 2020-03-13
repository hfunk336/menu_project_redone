"use strict";

var options = document.getElementById("menu").innerHTML
window.onload = changeMenu("specials")

// changes the picture shown on right

// fills in the div inside the article with the menu
function changeMenu(x){
    options = "";

    if(x == "apps"){
        options +=  "<h3>Appetizers</h3>"
        options +=  "<p>Scroll down for more!</p>"
        options +=  "<ul id=\"appetizers\">"
        options +=  "<li>"
        options +=  "Combination Plate <br/>"
        options +=  "<em>Paper wrapped chicken (2), BBQ ribs (2), skewered beef (2), egg rolls(2), fried wonton (4), and fried shrimp (2)</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>"
        options +=  "Egg Rolls (4) <br/>"
        options +=  "<em>Crispy and filled with carrots and cabbage.</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>"
        options +=  "Tottie Rolls (4)<br/>"
        options +=  "<em>Vietnamese style egg rolls. A real treat wrapped in cool lettuce.</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>"
        options +=  "Shanghai Egg Rolls (4)<br/>"
        options +=  "<em>Filled with pork, shiitake mushrooms and napa cabbage</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>"
        options +=  "Spring Rolls (4)<br/>"
        options +=  "<em>Vietnamese Goi Cuon: Soft rice paper rolls with bean sprouts, herbs and rice vermicelli. (Traditional pork & shrimp, Salmon, Shrimp Tempure, Soft Shell Crab, Vegetarian)</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>"
        options +=  "Sugarcane Chicken <br/>"
        options +=  "<em>Chiicken meatballs skewered on sugarcane and served with cilantro, mint, cucumber, and rice vermicelli. Wrap it all in cool lettuce and dip in peanut sauce.</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>Beef on Skewers (4)</li>"
        options +=  "<br/>"
        options +=  "<li>"
        options +=  "Chicken Satay Sticks (2)<br/>"
        options +=  "<em>Marinated Chicken on a bamboo skewer, served with peanut sauce.</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>Soft Shell Crab with Ponzu Sauce</li>"
        options +=  "<br/>"
        options +=  "<li>Edamame</li>"
        options +=  "<br/>"
        options +=  "<li>Shrimp Puffs (6)</li>"
        options +=  "<br/>"
        options +=  "<li>BBQ Pork Ribs (4)</li>"
        options +=  "<br/>"
        options +=  "<li>Fried Wonton (10)</li>"
        options +=  "<br/>"
        options +=  "<li>"
        options +=  "Fried Tofu (8)<br/>"
        options +=  "<em>Fried tofu wedges served with peanut or cucumber sauce</em>"
        options +=  "</li>"
        options +=  "<br/>"
        options +=  "<li>Potstickers (5)<br/></li>"
        options +=  "<br/>"
        options +=  "<li>Spicy Cucumber</li>"
        options +=  "</ul>"
    }else if(x == "soup"){
        options +=  "<h3>Soups</h3>"
        options +=  "<p>Items marked * are spicy!</p>"
        options +=  "<ul id=\"soups\">"
        options +=  "<li>Sizzling Rice Soup</li><br/>"
        options +=  "<li>Wonton Soup</li><br/>"
        options +=  "<li>Egg Drop Soup</li><br/>"
        options +=  "<li>Hot & Sour Soup*</li><br/>"
        options +=  "<li>Chicken Corn Soup</li><br/>"
        options +=  "<li>"
        options +=  "Spicy Seafood Noodle Soup* <br/>"
        options +=  "<em>Mussels, fish, shrimp, scallops, and vegetables with rice noodles.</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Tom Yum* <br/>"
        options +=  "<em>Classic Thai soup made with lemon grass and Thai herbs.<br/> </em>"
        options +=  "<em>Chicken, Shrimp, Seafood (scallops, white fish, mussels & shrimp)</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Tom Kha Gai*<br/>"
        options +=  "<em>Thai Herbs in coconut milk broth. </em><br/>"
        options +=  "<em>Chicken, Shrimp, Seafood (scallops, white fish, mussels & shrimp)</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Pho<br/>"
        options +=  "<em>Vietnamese Rice Noodle Soup.<br/></em>"
        options +=  "<em>Tai (beef) Ga (Chicken) Tai Bo Vien (Beef w/ Meatballs)</em>"
        options +=  "</li>"
        options +=  "</ul>"
    }else if(x == "tv"){
        options += "<h3>Thai and Vietnamese Entrees</h3>"
        options += "<p>Items marked with * are spicy! <br/> Be sure to scroll down for more.</p>"
        options += "<ul id=\"tvList\">"
        options += "<li>"
        options += "    Larb*<br/>"
        options += "    <em>Spicy minced meat salad with fresh mint and Thai herbs. (Tofu, Chicken (Gai) or Beef (Nua), Shrimp, or Mussels.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Cucumber Chicken Salad<br/>"
        options += "    <em>Chicken and cool cucumber seasoned with mint, ginger and lemon. Topped with crispy rice noodles.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Bun Tom<br/>"
        options += "    <em>Charbroiled pork, shrimp and Tottie rolls with fresh lettuce, fresh mint, peanuts and rice vermicelli.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Papaya Salad Platter*<br/>"
        options += "    <em>Green Papaya salad with Thai grilled chicken and sticky rice.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Pad Thai*<br/>"
        options += "    <em>Traditional Thai stir fried rice noodles. (Chicken, Beef, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Panang*<br/>"
        options += "    <em>Spicy Thai curry with your choice of the following: Chicken, Beef, Shrimp or Fish.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Kang Keo Wan*<br/>"
        options += "    <em>Spicy Thai green curry with your choice of the following: Chicken, Beef, Shrimp, Fish, or Mussels.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Pad Kra Pao*<br/>"
        options += "    <em>Stir Fried w/ Thai basil in chilli sauce, onions, red bell peppers, and bamboo shoots. (Chicken, Beef, Shrimp, Fish, or Mussels)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Pad Khing*<br/>"
        options += "    <em>Choice of chicken, pork, beef, or shrimp stir fried with fresh ginger, mushrooms and onion. (Chicken, Beef, Pork, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Lemon Grass Stir-Fry*<br/>"
        options += "    <em>Stir Fried with lemon grass, pea pods, red bell peppers, onions and mushrooms. (Chicken, Beef, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Thai Stil-Fry<br/>"
        options += "    <em>With mixed vegetables and Thai basil sauce. (Chicken, Beef, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>Crispy Chicken with Thai Basil</li><br/>"
        options += "<li>Crispy Beef with Thai Basil</li><br/>"
        options += "<li>"
        options += "    Dragonfly Noodles<br/>"
        options += "    <em>Chicken or Beef</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Shoji Noodles<br/>"
        options += "    <em>Stir-fried rice noodles with broccoli, bean sprouts, onions and Thai basil. (Chicken, Beef, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Chiang Mai Noodles*<br/>"
        options += "    <em>Thai curry chicken, Thai basil and bamboo shoots with rice noodles.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Pad Se Ew*<br/>"
        options += "    <em>Spicy chow fun noodles with broccoli and bok choy. (Chicken, Beef, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Pad Kee Mao*<br/>"
        options += "    <em>Saut&eacute;ed vegetables with chow fun noodles, basil, and Thai spices. (Chicken, Beef, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Pad Lard Na<br/>"
        options += "    <em>Chow fun noodles topped with onion, broccoli, bok choy, pea pods, stir-fried with brown sauce. (Chicken, Beef, or Shrimp)</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Salmon with Basil-Ginger Sauce<br/>"
        options += "    <em>Grilled salmon with a Thai basil and ginge sauce. Served with steamed mixed vegetables.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Red Curry Salmon*<br/>"
        options += "    <em>Grilled salmon with Thai red curry sauce. Served with steamed mixed vegetables.</em>"
        options += "</li><br/>"
        options += "<li>Thai Curry Salmon w/ Rice Noodles*</li><br/>"
        options += "<li>"
        options += "    Spicy Thai Seafood*<br/>"
        options += "    <em>White fish, shrimp and mussels stir-fried with mushrooms, bamboo shoots, red bell peppers, onions, and Thai basil.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Thai Fish Filet*<br/>"
        options += "    <em>Braised white fish with Thai basil, mushrooms, onions, red bell peppers, and bamboo shoots.</em>"
        options += "</li><br/>"
        options += "<li>"
        options += "    Soft Shell Crap with Curry*<br/>"
        options += "    <em>Soft shell crab, Thai basil, bamboo shoots, mushrooms, onions, and red bell peppers stir-fried with yellow curry.</em>"
        options += "</li>"
        options += "</ul>"
    }else if(x == "entre"){
        options += "<h3>Chinese Entrees</h3>"
        options += "<p>"
        options += "Items marked with * are spicy! <br/>"
        options += "(Be sure to scroll for more items)"
        options += "</p>"
        options += "<ul id=\"menuList\" class=\"col-1-3\">"
        options += "<h4>Chicken</h4>"
        options += "<li>Chicken with Vegetables</li>"

        options += "<li>Chicken Chop Suey</li>"

        options += "<li>Chicken with Broccoli</li>"

        options += "<li>Chicken with Pea Pods</li>"

        options += "<li>Curry Chicken*</li>"

        options += "<li>Chicken with Cashew Nuts</li>"

        options += "<li>Kung Pao Chicken*</li>"

        options += "<li>Chicken with Garlic Sauce*</li>"

        options += "<li>Chicken with Black Bean Sauce</li>"

        options += "<li>Sesame Chicken</li>"

        options += "<li>Tangerine Chicken</li>"

        options += "<li>Lemon Chicken</li>"

        options += "<li>General Tao’s Chicken*</li>"

        options += "<li>Moo Shu Chicken</li>"

        options += "<li>Sweet and Sour Chicken</li>"

        options += "<li>Chicken Egg Fu Yong</li>"

        options += "<h4>Beef</h4>"
        options += "<li>Tangerine Beef</li>"

        options += "<li>Kung Pao Beef *</li>"

        options += "<li>Beef with Broccoli</li>"

        options += "<li>Mongolian Beef</li>"
    
        options += "<li>Beef or Pork with Vegetables</li>"

        options += "<li>Beef with Green Peppers</li>"

        options += "<li>Beef with Oyster Sauce</li>"
        options += "</ul>"
        options += "<ul id=\"menuList\" class=\"col-1-3\">"
        options += "<h4>Pork</h4>"
        options += "<li>Beef or Pork Chop Suey</li>"

        options += "<li>Shredded Pork Szechwan Style*</li>"

        options += "<li>Sweet and Sour Pork</li>"

        options += "<li>Pork Egg Fu Yong</li>"

        options += "<h4>Seafood</h4>"
        options += "<li>Kung Pao Shrimp*</li>"

        options += "<li>Shrimp with Pea Pods</li>"

        options += "<li>Shrimp Chop Suey</li>"

        options += "<li>Shrimp with Garlic Sauce*</li>"

        options += "<li>Hot Braised Shrimp*</li>"

        options += "<li>Tangerine Shrimp</li>"

        options += "<li>Shrimp with Lobster Sauce</li>"

        options += "<li>Moo Shu Shrimp</li>"

        options += "<li>Shrimp with Black Bean Sauce</li>"

        options += "<li>Scallops with Black Bean Sauce</li>"

        options += "<li>Mussels with Black Bean Sauce</li>"

        options += "<li>Sweet and Sour Shrimp</li>"

        options += "<li>Shrimp Egg Fu Yong</li>"

        options += "<li>Ginger Fish</li>"
        options += "</ul>"

    }else if(x == "nood"){
        options +=  "<h3>Chinese Noodles</h3>"
        options +=  "Scroll for more options!"
        options +=  "<ul id=\"noodles\">"
        options +=  "<li>"
        options +=  "Chow Mein <br/>"
        options +=  "<em>Chicken, Beef, Pork, Shrimp, Vegetable, or House Special (Chicken, Beef, and Shrimp)</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Chow Mein <br/>"
        options +=  "<em>Chicken, Beef, Shrimp, or House Special (Chicken, Beef, and Shrimp)</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Tottie's Pan Fried Noodles <br/>"
        options +=  "<em>Egg noodles pan fried until crispy; smothered with shrimp, chicken, beef, brocoli, mushrooms, snow peas, and brown sauce</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Seafood Pan Fried Noodles <br/>"
        options +=  "<em>Egg noodles pan fried until crispy; with scallops, white fish, shrimp and mixed vegetables.</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Pork Pan Fried Noodles <br/>"
        options +=  "<em>Egg noodles pan fried until crispy; with pork, shiitake mushrooms and napa cabbage</em>"
        options +=  "</li><br/>"
        options +=  "<li>"
        options +=  "Singapore Rice Noodles <br/>"
        options +=  "<em>Thin rice noodles with pork and shrimp stir-fried with a light curry sauce.</em>"
        options +=  "</li>"
        options +=  "</ul>"

    }else if(x == "veggie"){
        options +=  "<h3>Chinese Vegetables</h3>"
        options +=  "<p>"
        options +=  "Items marked with * are spicy!"
        options +=  "</p>"
        options +=  "<ul>"
        options +=  "<li>Mixed Steamed Vegetables</li><br/>"
        options +=  "<li>Vegetable Chop Suey</li><br/>"
        options +=  "<li>String Beans with Brown Sauce</li><br/>"
        options +=  "<li>Hot and Spicy Eggplant*</li><br/>"
        options +=  "<li>Home Style Bean Curd</li><br/>"
        options +=  "<li>Szechwan Style Bean Curd*</li><br/>"
        options +=  "<li>Vegetable Moo Shu</li><br/>"
        options +=  "<li>Vegetable Egg Fu Yong</li><br/>"
        options +=  "<li>Saut&eacute;ed Baby Bok Choy</li>"
        options +=  "</ul>"

    }else if(x == "rice"){
        options +=  "<h3>Rice Platters</h3>"
        options +=  "<ul>"
        options +=  "<li>"
        options +=  "Tottie's Fried Rice <br/>"
        options +=  "<em>Combination of shrimp, chicken, and beef.</em>"
        options +=  "</li> <br/>"
        options +=  "<li>Shrimp Fried Rice</li> <br/>"
        options +=  "<li>Beef Fried Rice</li><br/>"
        options +=  "<li>Chicken or Pork Fried Rice</li><br/>"
        options +=  "<li>Vegetable Fried Rice</li><br/>"
        options +=  "<li>Egg Fried Rice</li><br/>"
        options +=  "<li>"
        options +=  "Thai Fried Rice <br/>"
        options +=  "<em>Chicken, Pork, Beef, or Shrimp seasoned with Thai Basil</em>"
        options +=  "</li><br/>"
        options +=  "<li>Steamed Brown Rice</li>"
        options +=  "</ul>"

    }else if(x == "dessert"){
        options += '<h3>House-Crafted Desserts</h3>'
        options += '<ul>'
        options += '<li>'
        options += 'Fried Honey Banana (4) <br/>'
        options += '<em>Served with homemade coconut ice cream.</em>'
        options += '</li>'
        options += '<li>'
        options += '<br/>'
        options += 'Homemade Ice Cream <br/>'
        options += '<em>Ask your server for available flavors.</em>'
        options += '</li>'
        options += '<br/>'
        options += '<li>'
        options += 'Homemade Ice Cream Sampler <br/>'
        options += "<em>Can't decide on a flavor? Try the sampler!</em>"
        options += '</li>'
        options += '<br/>'
        options += '<li>'
        options += 'Mango with Sticky Rice <br/>'
        options += '<em>Sticky Rice topped with sliced mango and sweetend coconut milk.</em>'
        options += '</li>'
        options += '</ul>'

    }else if(x == 'specials'){
        options += '<h3>Weekday Lunch Specials</h3>'
        options += '<p>'
        options += 'Available Tuesday through Friday 11 AM to 3 PM <br/>'
        options += 'Served with an Egg Roll and your choice of Steamed or Fried Rice <br/>'
        options += 'Dine-In Lunch Specials include Egg Drop or Hot and Sour Soup <br/>'
        options += 'Items marked with * are spicy!'
        options += '</p>'
        options += '</div>'
        options += '<div id="options" class="row">'
        options += '<ul class="col-1-3">'
        options += '<h4>Chicken</h4>'
        options += '<li>Pad Thai Chicken*</li>'
        options += '<li>Panang or Kang Geo Wan Chicken*</li>'
        options += '<li>Pad Kra Pao Chicken*</li>'
        options += '<li>Kung Pao Chicken*</li>'
        options += '<li>Chicken Chop Suey</li>'
        options += '<li>Chicken w/ Vegetables</li>'
        options += '<li>Chicken w/ Cashews</li>'
        options += '<li>Chicken with Black Bean Sauce</li>'
        options += '<li>Sliced Chicken with Garlic Sauce*</li>'
        options += '</ul>'
        options += '<ul class="col-1-3">'
        options += '<h4>Beef</h4>'
        options += '<li>Pad Thai Beef*</li>'
        options += '<li>Panang or Kang Keo Wan Beef*</li>'
        options += '<li>Pad Kra Pao Beef*</li>'
        options += '<li>Kung Pao Beef*</li>'
        options += '<li>Beef w/ Broccoli</li>'
        options += '<li>Beef Chop Suey</li>'
        options += '</ul>'
        options += '<ul class="col-1-3">'
        options += '<h4>Chow Mein</h4>'
        options += '<li>Vegetable Chow Mein</li>'
        options += '<li>Chicken Chow Mein</li>'
        options += '<li>Beef Chow Mein</li>'
        options += '<li>Shrimp Chow Mein</li>'
        options += '</ul>'
        options += '</div>'
    }

    document.getElementById("menu").innerHTML = options;
}