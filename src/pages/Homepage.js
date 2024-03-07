import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card"

const HomePage = () => {
    return(
        <>
             <Navigation />
        < Header bigTitle="Coffeez" smallTitle="Coffee that will make you smile" buttonText="order now" />
        <Section title="Our Kwalities"> 
            <Card image="pic.jpg" text="tekst 1"  />
            <Card image="pic2.jpg" text="tekst 2" />
            <Card  text="tekst 3" />
            <Card image="pic4.jpg" text="tekst 4" />
        </Section>
        <Section title="Our Kwalities"> 
            <Card  text="tekst 1"  />
            <Card  text="tekst 2" />
            <Card  text="tekst 3" />
            <Card  text="tekst 4" />
        </Section>
        
        </>
    );
}

export default HomePage