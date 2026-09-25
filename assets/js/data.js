// Edit this file to update homepage content. The rendering logic lives in app.js.
window.SITE_DATA = {
  profile: {
    name: "Shurui Hu",
    kicker: "Computer Engineering · Columbia University",
    title: "M.S. student working across AI systems, multimodal sensing, and embedded intelligence.",
    bio: "I build practical intelligent systems that connect sensing, learning, and deployment, with a focus on multimodal perception, edge AI, computer vision, and efficient computing.",
    photo: "https://github.com/ShuruiHu.png?size=720",
    location: "New York, USA",
    status: "Expected M.S. · Dec 2027",
    email: "sh4908@columbia.edu",
    cv: "assets/Shurui_Hu_CV.pdf",
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=8LGTPpIAAAAJ&hl=en" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/shurui-hu-204709434/" },
      { label: "GitHub", url: "https://github.com/ShuruiHu" }
    ]
  },

  about: [
    "I am pursuing an M.S. in Computer Engineering at Columbia University. Before Columbia, I received a B.S. in Computer Science and Technology (Big Data) from China University of Geosciences in 2026.",
    "My recent work spans LiDAR–vision multimodal low-light enhancement, efficient deep-learning deployment, medical image segmentation, and remote-sensing super-resolution. I am particularly interested in sensor–algorithm–system co-design: building models that remain useful when they meet real sensors, real hardware, and real deployment constraints."
  ],

  research: [
    {
      meta: "Multimodal Perception",
      title: "LiDAR–Vision Low-Light Enhancement",
      description: "A multimodal enhancement system for autonomous systems in extremely low illumination, spanning synchronized data acquisition, LiDAR–image fusion, model design, and embedded deployment.",
      tags: ["LiDAR", "Computer Vision", "TensorRT", "Edge AI"]
    },
    {
      meta: "Medical Vision",
      title: "PolyMamba",
      description: "Polyp segmentation with spatial-prior guidance and high-frequency enhancement to improve dynamic context modeling and preserve clinically useful detail.",
      tags: ["Mamba", "Segmentation", "Frequency Modeling"]
    },
    {
      meta: "Remote Sensing",
      title: "LandSR-Mamba",
      description: "Land-cover super-resolution for detailed hazard assessment, combining state-space modeling, frequency enhancement, and multimodal spectral fusion.",
      tags: ["Remote Sensing", "Super-Resolution", "Mamba"]
    }
  ],

  publications: [
    {
      year: "2025",
      title: "PolyMamba: Spatial-prior Guided Mamba for Polyp Segmentation with High-Frequency Enhancement",
      authors: "R. Fu, S. Hu, X. Zheng, C. Tang, X. Liu",
      venue: "MICCAI 2025",
      url: "https://scholar.google.com/citations?user=8LGTPpIAAAAJ&hl=en"
    },
    {
      year: "2025",
      title: "LandSR-Mamba: Land Cover Super-Resolution for Detailed Hazard Assessment",
      authors: "S. Hu",
      venue: "IEEE HPCC 2025",
      url: "https://scholar.google.com/citations?user=8LGTPpIAAAAJ&hl=en"
    }
  ],

  projects: [
    {
      visual: "Multimodal Nighttime Perception",
      title: "LiDAR–Vision Enhancement Platform",
      description: "Portable data-collection and inference platform integrating an IMX307 camera, Velodyne VLP-16 LiDAR, multimodal enhancement, and deployment on embedded AI hardware.",
      status: "Project page placeholder",
      detail: "Vision · LiDAR · Edge AI"
    },
    {
      visual: "Embedded Networking",
      title: "Micro VLAN-Managed Network Switch",
      description: "A compact managed Ethernet switch with real-time port monitoring, VLAN configuration, traffic display, and a small color GUI.",
      status: "Project page placeholder",
      detail: "Embedded · Networking"
    },
    {
      visual: "IoT Sensing",
      title: "ESP32 Sensor Platform",
      description: "Distributed temperature, humidity, and pressure sensing using ESP32, MQTT, InfluxDB, and Grafana for real-time multi-node visualization.",
      status: "Project page placeholder",
      detail: "IoT · MQTT · Grafana"
    },
    {
      visual: "Mechatronics & Control",
      title: "Voron 2.4 Embedded Control Build",
      description: "Independent assembly, wiring, configuration, and debugging of a Voron 2.4 3D printer with integrated motion, sensing, thermal, and embedded control subsystems.",
      status: "Project page placeholder",
      detail: "Embedded · Motion Control"
    }
  ],

  experience: [
    {
      time: "2026 — 2027",
      title: "Columbia University",
      place: "M.S. in Computer Engineering · New York, USA",
      description: "Graduate study in computer engineering with interests in AI systems, embedded computing, multimodal sensing, and hardware–software co-design."
    },
    {
      time: "2025",
      title: "The University of Hong Kong",
      place: "Research Intern · Department of Data and Systems Engineering",
      description: "Worked on low-light enhancement for autonomous-driving scenarios, including color-space analysis, model development, and evaluation on GPU and embedded NPU environments."
    },
    {
      time: "2022 — 2026",
      title: "China University of Geosciences",
      place: "B.S. in Computer Science and Technology (Big Data) · Wuhan, China",
      description: "Completed undergraduate study with an average score of 90/100 and research spanning computer vision, multimodal learning, edge AI, and data systems."
    },
    {
      time: "2025",
      title: "China Construction Bank, Jiangxi Branch",
      place: "Data Analysis Intern · Financial Technology Department",
      description: "Applied large-scale data analysis and machine-learning methods to transaction monitoring, abnormal-pattern detection, and intelligent verification workflows."
    }
  ]
};
