import React, { useEffect } from 'react';
import { notification } from 'antd';
import './Notification1.css'; // Import CSS file

const Notification1 = ({ name, pauseOnHover }) => {
  const [api, contextHolder] = notification.useNotification();

  // Open notification when the component mounts or when isSubmitted is true
  useEffect(() => {
    if (pauseOnHover) {
      openNotification();
    }
  }, [pauseOnHover]);

  const openNotification = () => {
    api.open({
      message: 'Message has been sent',
      description: name,
      showProgress: true,
      pauseOnHover,
      className: 'custom-notification',  // Add custom class to the notification
    });
  };

  return <div className="Notification1">{contextHolder}</div>;
};

export default Notification1;
