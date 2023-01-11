const scroll_left = (direction , element) =>
{
    if (element.scrollWidth <= (element.scrollLeft + element.offsetWidth) && direction === "left")
    {
        element.scrollLeft = 0;
    } else if(element.scrollWidth > (element.scrollLeft + element.offsetWidth) && direction === "left")
    {
            element.scrollBy({
                left: 2,
                behavior: "smooth"
            });
    }
}

const scroll_right = ( direction , element) => {
    if (element.scrollLeft !== 0 && direction === "right")
    {
            element.scrollTo({
                left: (element.scrollLeft + element.offsetWidth) - element.scrollWidth,
                behavior: "smooth"
            });
    }else if (element.scrollLeft === 0 && direction === "right")
    {
        element.scrollLeft = (element.scrollLeft + element.offsetWidth);
    }
}
export const autoplay_scrolling = (element_class, direction) =>
{
    const element = document.querySelector(`.${element_class}`);
    scroll_left(direction , element);        
    scroll_right(direction , element);
}

// convert position for the difreent scrolling and diffrent window width
const toggle_position = (container , element , fixed_y , hide_y) =>
{
    const handelr = () => {
        window.addEventListener("scroll", () =>
        {
            if (container.getClientRects()["0"].y <= fixed_y && window.innerWidth >= 991)
            {
                element.style.cssText += "position: fixed !important; display:block !important";
            } else if(container.getClientRects()["0"].y > fixed_y && window.innerWidth >= 991)
            {
                element.style.cssText += "position: absolute !important; display:none !important";
            }

            if (container.getClientRects()["0"].y <= hide_y && window.innerWidth >= 991)
            {
                element.style.cssText += "position: absolute !important; display:none !important";
            }

            if(window.innerWidth < 991 ) {
                element.style.cssText += "position: initial !important; display:block !important; transform:translateY(0)";
            }
        });
     }
     // call function at a normal time
     handelr();
     // call function when window resize
     window.addEventListener("resize" , () => handelr);
}

const setup_toggle_position = () =>
{
    const setup = document.querySelector(".setup-container");
    let current_img = document.querySelector(".fixed-center");
    toggle_position(setup, current_img, 550, -500);
}

const video_toggle_position = () =>
{
    const container = document.querySelector("#hosting");
    const video = document.querySelector("video");
    toggle_position(container, video, 393, -770);

}

const team_toggle_position = () =>
{
    const container = document.querySelector(".team");
    const team_poster = document.querySelector(".team-code");
    toggle_position(container, team_poster, 393, -670);
}
const generate_toggle_position = () =>
{
    const container = document.querySelector(".code-generateor");
    const generate_wrapper = document.querySelector(".generateor-wrapper");
    toggle_position(container, generate_wrapper, 480, -200);

}

const toggle_btns = (target , secondBtn) =>
{
    target.classList.add("toggle-btns");
    secondBtn.classList.remove("toggle-btns");
}

export { setup_toggle_position , video_toggle_position , team_toggle_position , generate_toggle_position ,  toggle_btns };