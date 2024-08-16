import axios from 'axios';


const Footer = ({ contact = {} }) => {

    const handleEmailClick = () => {
        axios.post('https://reqres.in/api/workintech', {
            email: contact.email
        })
            .then(response => {
                console.log('Email gönderildi', response.data);
            })
            .catch(error => {
                console.error('Email gönderilemedi', error);
            });
    };

    return (
        <footer className="bg-white py-10 text-center">
            <h2 className="text-3xl font-bold text-blue-700">Send me a message!</h2>
            <p className=" mt-4">Got a question or proposal, or just want to say hello? Go ahead.</p>
            <button onClick={handleEmailClick} className="text-blue-700 font-bold underline mt-2">
                almilasucode@example.com
            </button>
            <button className="flex justify-center mx-auto mt-4">
                <img src="../src/assets/socials.png" /></button>

        </footer>
    );
};

export default Footer;
