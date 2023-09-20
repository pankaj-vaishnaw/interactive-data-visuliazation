const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
const websiteTrafficData = [57, 69, 75, 80, 90];
const barColor = 'rgba(75, 192, 192, 0.2)'; // Light blue color with some opacity
const hoverBackgroundColor='rgba(0, 123, 255, 0.7)'
 const borderColor='rgba(75, 192, 192, 0.2)'
 const border='1px solid rgba(0, 123, 255, 0.7)'
 const height='200px'

function createBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');

    const data = {
        labels: months,
        datasets: [{
            label: 'Monthly Sales',
            data: websiteTrafficData,
            backgroundColor: barColor,
            hoverBackgroundColor:hoverBackgroundColor,
            borderColor:borderColor,
            border:border,
            borderWidth: 1,
            height:height
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
        },
    };

    const barChart = new Chart(ctx, config);

 
   const animation= anime({
        targets: barChart.data.datasets[0].data,
        duration: 1000,
        easing: 'linear',
        delay: (el, i) => i * 200,
        loop: true,
        update: function(anim) {
            barChart.update();
        },
    });
}


createBarChart();
