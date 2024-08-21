function updateTimer() {
    chrome.alarms.get("coffeeReminder", (alarm) => {
      if (alarm) {
        const remainingTime = Math.round((alarm.scheduledTime - Date.now()) / 1000 / 60);
        document.getElementById("timer").textContent = `${remainingTime} minutes`;
      }
    });
  }
  
  document.getElementById("resetTimer").addEventListener("click", () => {
    chrome.alarms.clear("coffeeReminder", () => {
      chrome.alarms.create("coffeeReminder", { delayInMinutes: 60 });
      updateTimer();
    });
  });
  
  updateTimer();
  setInterval(updateTimer, 1000);