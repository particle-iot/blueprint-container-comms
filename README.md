# **Particle Blueprint: Multi-Container Communication with Redis**

## **Introduction**
Welcome to the **Multi-Container Communication Blueprint App** for Particle devices! This project demonstrates how to use **Redis as an event queue** to enable communication between services inside **Docker containers**.

In this example, a **Python producer** sends messages to a **Redis queue**, and a **Node.js consumer** listens for and processes those messages. This is a great starting point for building **event-driven applications** on **Linux-based devices** like **Tachyon**.

**Use this blueprint to learn how to manage multi-container applications and inter-service communication!** 🚀

---

## **Project Structure**
This repository supports **Linux-based devices** and runs **multiple containers** to handle event-driven messaging.

```
/particle-container-comms
│── redis.conf         =# Redis configuration (optional)
│── /python_app/       # Python app that sends messages to Redis
│    ├── app.py
│    ├── requirements.txt
│    ├── Dockerfile
│── /node_app/         # Node.js app that listens for Redis messages
│    ├── app.js
│    ├── package.json
│    ├── Dockerfile
│── docker-compose.yml      # Defines and runs all containers
/README.md               # This file!
/blueprint.yaml        #Blueprint file!
```

---

## **How It Works**
This app runs **three containers**:
1. **Redis** – Stores messages in a queue (`queue:messages`).
2. **Python Producer** – Sends messages to Redis (`RPUSH`).
3. **Node.js Consumer** – Listens for messages (`BLPOP`) and processes them.

This approach is **event-driven**, meaning messages are handled in real time.

---

## **Getting Started: Linux Devices (Tachyon & Raspberry Pi)**
### **1. Set Up Your Particle Linux Device**
Ensure your **Tachyon** or **other supported Linux device** is connected and running.

### **2. Clone & Set Up the Project**
```sh
git clone https://github.com/particle-iot/blueprint-container-comms.git
cd particle-container-comms
```

### **3. Build & Run the Containers**
```sh
particle app push
```
This will start **Redis, the Python producer, and the Node.js consumer** inside containers.

### **4. See It in Action**
Check the logs to see the communication happening:
```sh
docker-compose logs -f
```

You should see **Python sending messages** and **Node.js receiving them**.

---

## **Contributions**
We welcome contributions! If you'd like to improve this blueprint, please open a **pull request** in the [GitHub Repository](https://github.com/particle-iot/blueprint-container-comms).

---

## **Supported Devices**
This blueprint supports:
- **Linux-based devices**, starting with **Tachyon** and **Raspberry Pi**.
