# **Particle Blueprint: Getting Started - Hello World**

## **Introduction**
Welcome to the **Hello World Blueprint App** for Particle devices! This project serves as a **starting point** for new users to get acquainted with **Particle's IoT platform** on **Linux-based devices**. It demonstrates a simple yet powerful "Hello, World!" program that runs inside a **Node.js-based container**.

**Use this blueprint to begin your IoT journey!** Simply follow the instructions to set up, build, and run your first Node.js containerized application.

---

## **Project Structure**
This repository supports **Linux-based devices**, with a **Node.js implementation**.

```
/particle-hello-world-node
│── /hello-world-node/    # The Node.js Hello World app
│    ├── Dockerfile
│    ├── docker-compose.yaml
│    ├── index.js
│── README.md
```

## **Getting Started: Linux Devices (Tachyon)**
For **Linux-based devices**, we run the Hello World app **inside a container**.

### **1. Set Up Your Particle Linux Device**
Ensure your **Tachyon** or **other supported Linux device** is connected and running.

### **2. Clone & Set Up the Project**
```sh
git clone https://github.com/particle-iot/blueprint-hello-world-node.git
cd particle-hello-world-node
```

### **3. Build & Run the Container**
```sh
particle app push
```

---

## **Contributions**
We welcome contributions to this blueprint! If you'd like to suggest changes, please open a **pull request** in the [Hello World Node GitHub Repository](https://github.com/particle-iot/blueprint-hello-world-node).

---

## **Supported Devices**
This blueprint supports:
- **Linux-based devices**, starting with **Tachyon**
