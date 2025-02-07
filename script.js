function animateRose() {
            const rose = document.getElementById('animatedRose');
            let rotation = 0;
            setInterval(() => {
                rotation = (rotation + 1) % 360;
                rose.style.transform = `rotate(${rotation}deg)`;
            }, 50);
        }

        document.addEventListener('DOMContentLoaded', animateRose);