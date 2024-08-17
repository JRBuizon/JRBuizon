import TypewriterComponent from "typewriter-effect";

const TypeWriterAnimation = () => {
    return (
        <TypewriterComponent onInit={(typewriter) => {
            typewriter.typeString('<span style="color: #36AE7C;">st</span>')
                .changeDelay(40)
                .typeString('<span style="color: #36AE7C;">uff</span')
                .pauseFor(1500)
                .deleteChars(1)
                .pauseFor(200)
                .deleteChars(1)
                .pauseFor(100)
                .deleteChars(1)
                .pauseFor(50)
                .deleteAll()
                .changeDelay(60)
                .typeString('<span style="color: #EB5353;">games</span>')
                .pauseFor(1500)
                .deleteChars(1)
                .pauseFor(200)
                .deleteChars(1)
                .pauseFor(100)
                .deleteChars(1)
                .pauseFor(50)
                .deleteAll()
                .changeDelay(50)
                .typeString('<span style="color: #F9D923;">web</span>')
                .pauseFor(150)
                .typeString('<span style="color: #F9D923;">sites</span>')
                .pauseFor(1500)
                .deleteChars(1)
                .pauseFor(200)
                .deleteChars(1)
                .pauseFor(100)
                .deleteChars(1)
                .pauseFor(50)
                .deleteAll()
                .start();
        }} options={{ cursor: '/', delay: 100, autoStart: true, loop: true }} />
    )
}

export default TypeWriterAnimation;