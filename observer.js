const aboutSection = document.querySelector('.about-sect');

const sections = document.querySelectorAll('.fade-in'); //every section

const movers = document.querySelectorAll('.move-up');

const options={ 
    root: null, //default is viewport
    threshold: 0, //1 is any 100% on page, 0 is any part
    rootMargin: "0px 0px -300px 0px" //like a margin in css
}; 

//observes when viewpoert scrolls to inputted selection
const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return; //prevents from loading on page load
        }
        console.log(entry);
        entry.target.classList.add("fade-in-visible")
        observer.unobserve(entry.target); //wont observe more than once(optional)
    })
    
}, options);

sections.forEach(section=>{
    observer.observe(section); //for each section in nodelist observe it
})

movers.forEach(move=>{
    observer.observe(move); //for each section in nodelist observe it
})

// observer.observe(sections);
// observer.observe(movers);