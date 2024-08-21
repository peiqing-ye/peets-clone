chrome.alarms.create("coffeeReminder", { periodInMinutes: 1 });

chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm triggered:", alarm.name);
    if (alarm.name === "coffeeReminder") {
      console.log("Coffee reminder alarm triggered, sending notification");
      chrome.notifications.create({
        type: "basic",
        iconUrl: "coffee-icon.png",
        title: "Coffee Break Time!",
        message: "Stop procrastinating and grab a coffee!"
      }, (notificationId) => {
        console.log("Notification created with ID:", notificationId);
        if (chrome.runtime.lastError) {
          console.error("Notification creation error:", chrome.runtime.lastError);
        }
      });
    }
  });

chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    chrome.alarms.create("coffeeReminder", { periodInMinutes: 1 });
  });

  // 測試立即創建通知
  chrome.notifications.create({
    type: "basic",
    iconUrl: "coffee-icon.png",
    title: "Test Notification",
    message: "This is a test notification"
  }, (notificationId) => {
    console.log("Test notification created with ID:", notificationId);
    if (chrome.runtime.lastError) {
      console.error("Test notification error:", chrome.runtime.lastError);
    }
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("Alarm triggered:", alarm.name);
    if (alarm.name === "coffeeReminder") {
      console.log("Sending notification");
      chrome.notifications.create({
        type: "basic",
        iconUrl: "coffee-icon.png",
        title: "Coffee Break Time!",
        message: "Stop procrastinating and grab a coffee!"
      }, (notificationId) => {
        console.log("Notification created:", notificationId);
        if (chrome.runtime.lastError) {
          console.error("Notification error:", chrome.runtime.lastError);
        }
      });
    }
  });
  
  // 添加這行來檢查權限
  chrome.permissions.contains({
    permissions: ['alarms', 'notifications']
  }, (result) => {
    console.log("Has required permissions:", result);
  });

  chrome.notifications.getPermissionLevel((level) => {
    console.log("Notification permission level:", level);
  });

  chrome.alarms.create("testAlarm", { delayInMinutes: 0.1 });

  chrome.action.onClicked.addListener((tab) => {
    chrome.notifications.create({
      type: "basic",
      iconUrl: "coffee-icon.png",
      title: "Test Notification",
      message: "This is a test notification"
    });
  });

  chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed");
    chrome.alarms.create("coffeeReminder", { periodInMinutes: 1 }, () => {
      console.log("Coffee reminder alarm created");
      chrome.alarms.get("coffeeReminder", (alarm) => {
        console.log("Coffee reminder alarm details:", alarm);
      });
    });
  });