function calculatePPC() {
    // Get input values
    const dailyBudget = parseFloat(document.getElementById('daily-budget').value) || 0;
    const campaignDays = parseInt(document.getElementById('campaign-days').value) || 0;
    const targetAcos = parseFloat(document.getElementById('target-acos').value) || 0;
    const avgCpc = parseFloat(document.getElementById('avg-cpc').value) || 0;

    // Perform calculations
    const totalBudget = dailyBudget * campaignDays;
    const dailyClicks = avgCpc > 0 ? Math.floor(dailyBudget / avgCpc) : 0;
    const totalClicks = dailyClicks * campaignDays;
    const requiredSales = targetAcos > 0 ? (totalBudget / (targetAcos / 100)) : 0;

    // Update results
    document.getElementById('total-budget').textContent = `$${totalBudget.toFixed(2)}`;
    document.getElementById('daily-clicks').textContent = dailyClicks;
    document.getElementById('total-clicks').textContent = totalClicks;
    document.getElementById('required-sales').textContent = `$${requiredSales.toFixed(2)}`;
}

function resetCalculator() {
    // Reset all input fields
    document.getElementById('daily-budget').value = '';
    document.getElementById('campaign-days').value = '';
    document.getElementById('target-acos').value = '';
    document.getElementById('avg-cpc').value = '';

    // Reset results
    document.getElementById('total-budget').textContent = '$0.00';
    document.getElementById('daily-clicks').textContent = '0';
    document.getElementById('total-clicks').textContent = '0';
    document.getElementById('required-sales').textContent = '$0.00';
}

// Add event listeners for Enter key
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculatePPC();
            }
        });
    });
});
