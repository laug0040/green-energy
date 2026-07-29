    // Load your images on page-load
    function preloader() {
        const imagesList = [
           "./img/img-1.jpg",
           "./img/img-2.jpg",
           "./img/img-3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        // Images ready to be used:
        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);
    
    
    /* 
    Get all buttons in a NODE LIST of buttons (array like structure) */
    const controls = document.getElementById('controls');
    const buttons = controls ? Array.from(controls.querySelectorAll('button')) : [];
    
    /* 
    Complete your resource-object that will store the dynamic content.
    Resource object should 3 sub-objects. Give your sub-objects
    meaningful names. Every sub-object should have the following
    properties headingContent, bodyText, imgUrl and imgAlt. */

    const resources = {
        solar: {
            headingContent: 'Affordable Solar Panels',
            bodyText: 'Generate clean electricity with rooftop solar. Rebates, incentives, and flexible financing make solar accessible for many households.',
            imgUrl: 'img/placeholder-solar.jpg',
            imgAlt: 'Solar panels on a roof'
        },
        wind: {
            headingContent: 'Community Wind Projects',
            bodyText: 'Small-scale and community-owned wind projects share costs and benefits across neighborhoods, lowering per-household expense.',
            imgUrl: 'img/placeholder-wind.jpg',
            imgAlt: 'Wind turbines'
        },
        efficiency: {
            headingContent: 'Energy Efficiency Upgrades',
            bodyText: 'Insulation, efficient appliances, and smart thermostats reduce consumption and often pay back through lower bills.',
            imgUrl: 'img/placeholder-efficiency.jpg',
            imgAlt: 'Home with efficient insulation'
        }
    };

    /* 
    Get the reference to your HTML-container
    that will be dynamically loaded from the resource-object. */

    const container = document.getElementById('solution-content');
    
    /* 
    The first button in a NODE LIST of buttons will initially 
    have the id: active-button - this will uniquely style 
    the active button (CSS rule). 
    
    The first content from the
    resource-object will be loaded on the page load:
    `<h1>${headingContent}</h1>
     <img src="${imgUrl}" alt="${imgAlt}">
     <p>${bodyText}</p>` */

    if (container && resources.solar) {
        container.innerHTML = '<h1>' + resources.solar.headingContent + '</h1>' +
            '<img src="' + resources.solar.imgUrl + '" alt="' + resources.solar.imgAlt + '">' +
            '<p>' + resources.solar.bodyText + '</p>';
    }
    
    /* 
    Start your handleSelection function here. */ 
    function handleSelection(event) {
        const clicked = event.currentTarget;

        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */
        for (let i = 0; i < buttons.length; i++) {
            const b = buttons[i];
            if (b.hasAttribute && b.hasAttribute('id')) {
                b.removeAttribute('id');
            }
        }

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
        clicked.setAttribute('id', 'active-button');

        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
        const idx = buttons.indexOf(clicked);
        const keys = ['solar', 'wind', 'efficiency'];
        const key = keys[idx] || 'solar';
        const data = resources[key];
        if (container && data) {
            container.innerHTML = '<h1>' + data.headingContent + '</h1>' +
                '<img src="' + data.imgUrl + '" alt="' + data.imgAlt + '">' +
                '<p>' + data.bodyText + '</p>';
        }
    }
        
        /* 
        Remove the id active-button from the element that
        contains it prior to the click-event. 

        This will require the loop throught the NODE LIST of buttons. 
        Inside the loop, use conditional and the element object method
        hasAttribute() to check if the current button in the loop containes the id.
        If it does, use element-object property removeAttribute()
        to remove the id. */

        /*
        Use the element-object method setAttribute() to set the id active-button 
        to the currently clicked button. */
    
        /* 
        Use conditional and event-object to check which button is clicked
        and based on that, create HTML with the data inside the backticks:
        `<h1>${headingContent}</h1>
         <img src="${imgUrl}" alt="${imgAlt}">
         <p>${bodyText}</p>`
        Assign this content to to your HTML-container that will 
        be dynamically loaded (you already got the reference to 
        this container before you started the function handleSelection) */ 
    
    /* 
    Close your handleSelection function here. */  
    
    /* 
    Register all buttons to click event. The event-handler handleSelection will listen 
    for this event to happen. */ 

    // attach handler to each button
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', handleSelection);
    }