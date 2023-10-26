document.onload = run();
function run ()
{
    
    setTimeout(changetxt,2000 );
    setTimeout(()=> {
document.querySelector(".preloader").style.opacity = 0;
setTimeout(() => {
    
    document.querySelector(".preloader").style.display = "none";
}, 2000);



    }, 7000);
}
function changetxt()
{ const finalTxt = `created by Soham De`;
    const txtElem = document.querySelector("#ptxt");
    txtElem.style.transition = "all 2s ease";
    txtElem.style.opacity = 0;
    
    
    
        // txtElem.style.opacity= 1;
    document.querySelector("#insidePic").style.opacity = 1;
    setTimeout(() => {
        // document.querySelector("#insidePic").style.opacity = 0;
        txtElem.innerHTML = finalTxt;

        
        txtElem.style.top = "90%";
        txtElem.style.opacity = 1;

    }, 2000);
    

}



const dhakBtn = document.getElementById('dhak');
const dhakAudio = document.getElementById("dhakplayer");
dhakBtn.addEventListener('click', function()
{
    if(dhakAudio.paused)
    {
        dhakAudio.play();

    }
    else{
        dhakAudio.pause();
        dhakAudio.currentTime = 0;
    }
}
)
const sankhBtn = document.getElementById('sankha');
const sankhAudio = document.getElementById("sankhplayer");
sankhBtn.addEventListener('click', function()
{
    if(sankhAudio.paused)
    {
        sankhAudio.play();

    }
    else{
        sankhAudio.pause();
        sankhAudio.currentTime = 0;
    }
}
)

// flower rain




















let dh = 0;

function toggleDhup()
{
if (dh === 0) //initially
{
    dh = 1;
    document.querySelector(".cursor-follower").style.display = "block";

    document.addEventListener("mousemove", (e) => {
        const cursorFollower = document.querySelector(".cursor-follower");
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
    });
    
   
    
}
else //when moving
{
    dh = 0;
   document.querySelector(".cursor-follower").style.display = "none";
    

}
}
fh = 0
function toggleflower()
{
if (fh === 0) //initially
{
    fh = 1;
    document.querySelector(".cursor-follower2").style.display = "block";

    document.addEventListener("mousemove", (e) => {
        const cursorFollower = document.querySelector(".cursor-follower2");
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
    });
    
   
    
}
else //when moving
{
    fh = 0;
   document.querySelector(".cursor-follower2").style.display = "none";
    

}
}
gh = 0
function toggleghanta()
{
if (gh === 0) //initially
{
    gh = 1;
    document.querySelector(".cursor-follower3").style.display = "block";

    document.addEventListener("mousemove", (e) => {
        const cursorFollower = document.querySelector(".cursor-follower3");
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
    });
    
   
    
}
else //when moving
{
    gh = 0;
   document.querySelector(".cursor-follower3").style.display = "none";
    

}
}