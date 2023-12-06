function startTime() {
            const today = new Date();
            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;

            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const currentDate = today.toLocaleDateString('en-US', options);
            document.getElementById('calendar').innerHTML = currentDate;

            let greeting = '';
            if (h < 12) {
                greeting = 'Good Morning';
            } else if (h < 18) {
                greeting = 'Good Afternoon';
            } else {
                greeting = 'Good Evening';
            }

            document.getElementById('greeting').innerHTML = greeting;

            setTimeout(startTime, 1000);
        }

        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        window.onload = startTime;