import images from "../utils/images";

const testimonials = [
    {
        id: "1",
        company: "Macrosoft",
        position: "Partner Director of Software Engineering",
        img: images.testimonials.firstPerson,
        imgBy: "Photo by Zeyneb Alishova",
        icon: images.assets.youtube,
        desc: `On behalf of Macrosoft and my team let me thank you for all 
            the great work you have contributed to our journey to build 
            a world class Marketing service.`
    },
    {
        id: "2",
        company: "Geegle",
        position: "Technical Lead, Software Engineering",
        img: images.testimonials.secondPerson,
        imgBy: "Photo by Scott Foltz",
        icon: images.assets.twitter,
        desc: `We engaged Windmill to provide us with engineering services 
            on numerous complex projects over the past several years.`,
        featured: true
    },
    {
        id: "3",
        company: "Reppit",
        position: "Technical Lead, Software Engineering",
        img: images.testimonials.thirdPerson,
        imgBy: "Photo by Mwabonje",
        icon: images.assets.linkedIn,
        desc: `I just wanted to drop you a note to say thank you for 
            the work you put into the WinRT video capture code in OpenCV. `
    }
];

export default testimonials;