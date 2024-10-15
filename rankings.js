// Generate random household names (e.g., "Apartment 1", "Household A", etc.)
function generateRandomHouseholds(num) {
    const households = [];
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < num; i++) {
      const randomLetter = letters[Math.floor(Math.random() * letters.length)];
      const household = `Apartment ${i + 1} - Household ${randomLetter}`;
      households.push(household);
    }
    return households;
  }
  
  // Generate random resource usage for water (in liters) and electricity (in kWh)
  function generateRandomUsage(numHouseholds) {
    const waterUsageData = [];
    const electricityUsageData = [];
  
    for (let i = 0; i < numHouseholds; i++) {
      const waterUsage = Math.floor(Math.random() * 2000) + 500; // Between 500 and 2500 liters
      const electricityUsage = Math.floor(Math.random() * 1000) + 200; // Between 200 and 1200 kWh
      waterUsageData.push(waterUsage);
      electricityUsageData.push(electricityUsage);
    }
  
    return { waterUsageData, electricityUsageData };
  }
  
  // Function to render leaderboard
  function renderLeaderboard(tableId, data, usageType) {
    // Sort data by usage (ascending) to show least consumption at the top
    data.sort((a, b) => a.usage - b.usage);
  
    const tableBody = document.querySelector(tableId + " tbody");
    tableBody.innerHTML = ""; // Clear any existing rows
  
    data.forEach((user, index) => {
      const row = `<tr>
                  <td>${index + 1}</td>
                  <td>${user.name}</td>
                  <td>${user.usage} ${usageType}</td>
              </tr>`;
      tableBody.innerHTML += row;
    });
  }
  
  // Generate random data and render the leaderboard
  document.addEventListener("DOMContentLoaded", () => {
    const numHouseholds = 10;
    const householdNames = generateRandomHouseholds(numHouseholds);
    const { waterUsageData, electricityUsageData } = generateRandomUsage(numHouseholds);
  
    const waterData = householdNames.map((name, index) => ({
      name,
      usage: waterUsageData[index],
    }));
  
    const electricityData = householdNames.map((name, index) => ({
      name,
      usage: electricityUsageData[index],
    }));
  
    // Render both water and electricity leaderboards
    renderLeaderboard("#waterLeaderboard", waterData, "Liters");
    renderLeaderboard("#electricityLeaderboard", electricityData, "kWh");
  });
  