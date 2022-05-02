import Award from "../../img/award.png"
import "./about.css"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                        src="https://images.pexels.com/photos/6720295/pexels-photo-6720295.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                        alt="" 
                        className="a-card-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">
                Result-oriented Full-Stack Software Development Engineer 
                with more than 3 years of professional experience in web 
                and desktop software development and maintenance with a focus on JavaScript/TypeScript and C#. 
                </p>
                <p className="a-desc">
                Skilled in front-end development using React and Redux. 
                Good knowledge in efficiently using .NET and Node.js on the backend. 
                Experienced in database development and maintenance using SQL Server. 
                Well-developed skills in Cloud Architecture including Azure and AWS Services. 
                Hands-on experience in Power BI development. 
                Skilled in implementing client-server interaction. 
                Excellent collaboration, communication and problem-solving skills that help him succeed in a competitive environment.
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img"/>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Lorem ipsum dolor sit amet awards 2021</h4>
                        <p className="a-award-desc">
                        Lorem ipsum dolor sit amet. 
                        Et illo exercitationem ad saepe natus ea Quis culpa a amet tenetur ut aliquid totam quo excepturi sint quo aliquid tenetur. 
                        Et enim reprehenderit At fuga necessitatibus qui quia iure eum veritatis autem non cumque illo rem earum minima.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About