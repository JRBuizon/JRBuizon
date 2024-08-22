import TypewriterComponent from "typewriter-effect";

const TypeWriterAnimation = () => {
    return (
        <TypewriterComponent onInit={(typewriter) => {
            typewriter.typeString('<span style="color: #EB5353;">st</span>')
                .changeDelay(40)
                .typeString('<span style="color: #EB5353;">uff</span')
                .pauseFor(1500)
                .deleteChars(1)
                .pauseFor(200)
                .deleteChars(1)
                .pauseFor(100)
                .deleteChars(1)
                .pauseFor(50)
                .deleteAll()
                .changeDelay(60)
                .typeString('<span style="color: #36AE7C;">games</span>')
                .pauseFor(1500)
                .deleteChars(1)
                .pauseFor(200)
                .deleteChars(1)
                .pauseFor(100)
                .deleteChars(1)
                .pauseFor(50)
                .deleteAll()
                .changeDelay(50)
                .typeString('<span style="color: #187498;">web</span>')
                .pauseFor(150)
                .typeString('<span style="color: #187498;">sites</span>')
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