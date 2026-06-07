const CURRICULUM = {
  Physics: {
    faculty: "Manish Singh Tak Sir",
    color: "#3b82f6",
    chapters: [
      { id: "phy_01", name: "Mathematical Tools", lectures: [
        {lec:1,date:"2026-04-22"},{lec:2,date:"2026-04-23"},{lec:3,date:"2026-04-24"},{lec:4,date:"2026-04-25"},{lec:5,date:"2026-04-27"}
      ]},
      { id: "phy_02", name: "Error in Measurements", lectures: [
        {lec:1,date:"2026-04-28"},{lec:2,date:"2026-04-29"},{lec:3,date:"2026-04-30"}
      ]},
      { id: "phy_03", name: "Motion in a Straight Line", lectures: [
        {lec:1,date:"2026-05-02"},{lec:2,date:"2026-05-04"},{lec:3,date:"2026-05-05"},{lec:4,date:"2026-05-06"},{lec:5,date:"2026-05-07"},{lec:6,date:"2026-05-08"},{lec:7,date:"2026-05-09"},{lec:8,date:"2026-05-11"}
      ]},
      { id: "phy_04", name: "Motion in a Plane", lectures: [
        {lec:1,date:"2026-05-12"},{lec:2,date:"2026-05-13"},{lec:3,date:"2026-05-14"},{lec:4,date:"2026-05-15"}
      ]},
      { id: "phy_05", name: "Relative Motion", lectures: [
        {lec:1,date:"2026-05-16"},{lec:2,date:"2026-05-18"},{lec:3,date:"2026-05-19"}
      ]},
      { id: "phy_06", name: "Laws of Motion", lectures: [
        {lec:1,date:"2026-05-20"},{lec:2,date:"2026-05-21"},{lec:3,date:"2026-05-22"},{lec:4,date:"2026-05-23"},{lec:5,date:"2026-05-25"},{lec:6,date:"2026-05-26"},{lec:7,date:"2026-05-27"},{lec:8,date:"2026-05-29"},{lec:9,date:"2026-05-30"},{lec:10,date:"2026-06-01"}
      ]},
      { id: "phy_07", name: "Work, Energy and Power", lectures: [
        {lec:1,date:"2026-06-02"},{lec:2,date:"2026-06-03"},{lec:3,date:"2026-06-04"},{lec:4,date:"2026-06-05"},{lec:5,date:"2026-06-06"},{lec:6,date:"2026-06-08"},{lec:7,date:"2026-06-09"},{lec:8,date:"2026-06-10"},{lec:9,date:"2026-06-11"},{lec:10,date:"2026-06-12"}
      ]},
      { id: "phy_08", name: "Circular Motion", lectures: [
        {lec:1,date:"2026-06-13"},{lec:2,date:"2026-06-15"},{lec:3,date:"2026-06-16"},{lec:4,date:"2026-06-17"},{lec:5,date:"2026-06-18"},{lec:6,date:"2026-06-19"}
      ]},
      { id: "phy_09", name: "Centre of Mass & System of Particles", lectures: [
        {lec:1,date:"2026-06-20"},{lec:2,date:"2026-06-22"},{lec:3,date:"2026-06-23"},{lec:4,date:"2026-06-24"},{lec:5,date:"2026-06-25"},{lec:6,date:"2026-06-26"},{lec:7,date:"2026-06-27"},{lec:8,date:"2026-06-29"},{lec:9,date:"2026-06-30"},{lec:10,date:"2026-07-01"}
      ]},
      { id: "phy_10", name: "Rotational Motion", lectures: [
        {lec:1,date:"2026-07-02"},{lec:2,date:"2026-07-03"},{lec:3,date:"2026-07-04"},{lec:4,date:"2026-07-06"},{lec:5,date:"2026-07-07"},{lec:6,date:"2026-07-08"},{lec:7,date:"2026-07-09"},{lec:8,date:"2026-07-10"},{lec:9,date:"2026-07-11"},{lec:10,date:"2026-07-13"},{lec:11,date:"2026-07-14"},{lec:12,date:"2026-07-15"},{lec:13,date:"2026-07-16"},{lec:14,date:"2026-07-17"},{lec:15,date:"2026-07-18"}
      ]},
      { id: "phy_11", name: "Oscillations", lectures: [
        {lec:1,date:"2026-07-20"},{lec:2,date:"2026-07-21"},{lec:3,date:"2026-07-22"},{lec:4,date:"2026-07-23"},{lec:5,date:"2026-07-24"},{lec:6,date:"2026-07-25"},{lec:7,date:"2026-07-27"}
      ]},
      { id: "phy_12", name: "Ray Optics and Optical Instruments", lectures: [
        {lec:1,date:"2026-07-28"},{lec:2,date:"2026-07-29"},{lec:3,date:"2026-07-30"},{lec:4,date:"2026-07-31"},{lec:5,date:"2026-08-01"},{lec:6,date:"2026-08-03"},{lec:7,date:"2026-08-04"},{lec:8,date:"2026-08-05"},{lec:9,date:"2026-08-06"},{lec:10,date:"2026-08-07"},{lec:11,date:"2026-08-08"},{lec:12,date:"2026-08-10"},{lec:13,date:"2026-08-11"},{lec:14,date:"2026-08-12"}
      ]},
      { id: "phy_13", name: "Dual Nature", lectures: [
        {lec:1,date:"2026-08-13"},{lec:2,date:"2026-08-14"},{lec:3,date:"2026-08-17"}
      ]},
      { id: "phy_14", name: "Atoms", lectures: [
        {lec:1,date:"2026-08-18"},{lec:2,date:"2026-08-19"},{lec:3,date:"2026-08-20"}
      ]},
      { id: "phy_15", name: "Nuclei", lectures: [
        {lec:1,date:"2026-08-21"},{lec:2,date:"2026-08-22"},{lec:3,date:"2026-08-24"}
      ]},
      { id: "phy_16", name: "Thermal Properties of Matter", lectures: [
        {lec:1,date:"2026-08-25"},{lec:2,date:"2026-08-26"},{lec:3,date:"2026-08-27"},{lec:4,date:"2026-08-29"},{lec:5,date:"2026-08-31"},{lec:6,date:"2026-09-01"},{lec:7,date:"2026-09-02"}
      ]},
      { id: "phy_17", name: "Kinetic Theory", lectures: [
        {lec:1,date:"2026-09-03"},{lec:2,date:"2026-09-04"},{lec:3,date:"2026-09-05"}
      ]},
      { id: "phy_18", name: "Thermodynamics", lectures: [
        {lec:1,date:"2026-09-07"},{lec:2,date:"2026-09-08"},{lec:3,date:"2026-09-09"},{lec:4,date:"2026-09-10"},{lec:5,date:"2026-09-11"},{lec:6,date:"2026-09-12"},{lec:7,date:"2026-09-15"}
      ]},
      { id: "phy_19", name: "Mechanical Properties of Solids", lectures: [
        {lec:1,date:"2026-09-16"},{lec:2,date:"2026-09-17"}
      ]},
      { id: "phy_20", name: "Mechanical Properties of Fluids", lectures: [
        {lec:1,date:"2026-09-18"},{lec:2,date:"2026-09-19"},{lec:3,date:"2026-09-21"},{lec:4,date:"2026-09-22"},{lec:5,date:"2026-09-23"},{lec:6,date:"2026-09-24"},{lec:7,date:"2026-09-25"},{lec:8,date:"2026-09-26"}
      ]},
      { id: "phy_21", name: "Electric Charges, Fields & Potential", lectures: [
        {lec:1,date:"2026-09-28"},{lec:2,date:"2026-09-29"},{lec:3,date:"2026-09-30"},{lec:4,date:"2026-10-01"},{lec:5,date:"2026-10-03"},{lec:6,date:"2026-10-05"},{lec:7,date:"2026-10-06"},{lec:8,date:"2026-10-07"},{lec:9,date:"2026-10-08"},{lec:10,date:"2026-10-09"},{lec:11,date:"2026-10-10"},{lec:12,date:"2026-10-12"},{lec:13,date:"2026-10-13"},{lec:14,date:"2026-10-14"}
      ]},
      { id: "phy_22", name: "Gravitation", lectures: [
        {lec:1,date:"2026-10-15"},{lec:2,date:"2026-10-16"}
      ]},
      { id: "phy_23", name: "Current Electricity", lectures: [
        {lec:1,date:"2026-10-17"},{lec:2,date:"2026-10-19"},{lec:3,date:"2026-10-21"},{lec:4,date:"2026-10-22"},{lec:5,date:"2026-10-23"},{lec:6,date:"2026-10-24"},{lec:7,date:"2026-10-26"},{lec:8,date:"2026-10-27"}
      ]},
      { id: "phy_24", name: "Electrostatic Potential and Capacitance", lectures: [
        {lec:1,date:"2026-10-28"},{lec:2,date:"2026-10-29"},{lec:3,date:"2026-10-30"},{lec:4,date:"2026-10-31"},{lec:5,date:"2026-11-02"},{lec:6,date:"2026-11-03"},{lec:7,date:"2026-11-04"}
      ]},
      { id: "phy_25", name: "Moving Charges and Magnetism", lectures: [
        {lec:1,date:"2026-11-05"},{lec:2,date:"2026-11-10"},{lec:3,date:"2026-11-12"},{lec:4,date:"2026-11-13"},{lec:5,date:"2026-11-14"},{lec:6,date:"2026-11-17"},{lec:7,date:"2026-11-18"},{lec:8,date:"2026-11-19"},{lec:9,date:"2026-11-20"},{lec:10,date:"2026-11-21"}
      ]},
      { id: "phy_26", name: "Magnetism and Matter", lectures: [
        {lec:1,date:"2026-11-23"},{lec:2,date:"2026-11-24"}
      ]},
      { id: "phy_27", name: "Electromagnetic Induction", lectures: [
        {lec:1,date:"2026-11-25"},{lec:2,date:"2026-11-26"},{lec:3,date:"2026-11-27"},{lec:4,date:"2026-11-28"},{lec:5,date:"2026-11-30"},{lec:6,date:"2026-12-01"}
      ]},
      { id: "phy_28", name: "Alternating Current", lectures: [
        {lec:1,date:"2026-12-02"},{lec:2,date:"2026-12-03"},{lec:3,date:"2026-12-04"}
      ]},
      { id: "phy_29", name: "Waves", lectures: [
        {lec:1,date:"2026-12-05"},{lec:2,date:"2026-12-07"},{lec:3,date:"2026-12-08"},{lec:4,date:"2026-12-09"},{lec:5,date:"2026-12-10"},{lec:6,date:"2026-12-11"},{lec:7,date:"2026-12-12"}
      ]},
      { id: "phy_30", name: "Electromagnetic Waves", lectures: [
        {lec:1,date:"2026-12-14"},{lec:2,date:"2026-12-15"}
      ]},
      { id: "phy_31", name: "Wave Optics", lectures: [
        {lec:1,date:"2026-12-16"},{lec:2,date:"2026-12-17"},{lec:3,date:"2026-12-18"},{lec:4,date:"2026-12-19"},{lec:5,date:"2026-12-21"}
      ]},
      { id: "phy_32", name: "Semiconductor Electronics", lectures: [
        {lec:1,date:"2026-12-22"},{lec:2,date:"2026-12-23"},{lec:3,date:"2026-12-24"}
      ]},
      { id: "phy_33", name: "Units and Measurements", lectures: [
        {lec:1,date:"2026-12-26"}
      ]}
    ]
  },
  "Physical Chemistry": {
    faculty: "Faisal Razaq Sir",
    color: "#10b981",
    chapters: [
      { id: "pc_01", name: "Some Basic Concepts of Chemistry", lectures: [
        {lec:1,date:"2026-04-22"},{lec:2,date:"2026-04-23"},{lec:3,date:"2026-04-24"},{lec:4,date:"2026-04-27"},{lec:5,date:"2026-04-28"},{lec:6,date:"2026-04-29"},{lec:7,date:"2026-04-30"},{lec:8,date:"2026-05-02"},{lec:9,date:"2026-05-04"},{lec:10,date:"2026-05-05"},{lec:11,date:"2026-05-06"},{lec:12,date:"2026-05-07"},{lec:13,date:"2026-05-08"}
      ]},
      { id: "pc_02", name: "Redox Reaction", lectures: [
        {lec:1,date:"2026-05-09"},{lec:2,date:"2026-05-11"},{lec:3,date:"2026-05-12"},{lec:4,date:"2026-05-13"},{lec:5,date:"2026-05-14"}
      ]},
      { id: "pc_03", name: "Solutions", lectures: [
        {lec:1,date:"2026-05-15"},{lec:2,date:"2026-05-16"},{lec:3,date:"2026-05-18"},{lec:4,date:"2026-05-19"},{lec:5,date:"2026-05-20"},{lec:6,date:"2026-05-21"},{lec:7,date:"2026-05-22"},{lec:8,date:"2026-05-23"}
      ]},
      { id: "pc_04", name: "Chemical Kinetics", lectures: [
        {lec:1,date:"2026-05-25"},{lec:2,date:"2026-05-26"},{lec:3,date:"2026-05-27"},{lec:4,date:"2026-05-29"},{lec:5,date:"2026-05-30"},{lec:6,date:"2026-06-01"},{lec:7,date:"2026-06-02"}
      ]},
      { id: "pc_05", name: "Thermodynamics", lectures: [
        {lec:1,date:"2026-06-03"},{lec:2,date:"2026-06-04"},{lec:3,date:"2026-06-05"},{lec:4,date:"2026-06-06"},{lec:5,date:"2026-06-08"},{lec:6,date:"2026-06-09"},{lec:7,date:"2026-06-10"},{lec:8,date:"2026-06-11"},{lec:9,date:"2026-06-12"},{lec:10,date:"2026-06-13"}
      ]},
      { id: "pc_06", name: "Chemical Equilibrium", lectures: [
        {lec:1,date:"2026-06-15"},{lec:2,date:"2026-06-16"},{lec:3,date:"2026-06-17"},{lec:4,date:"2026-06-18"},{lec:5,date:"2026-06-19"}
      ]},
      { id: "pc_07", name: "Ionic Equilibrium", lectures: [
        {lec:1,date:"2026-06-20"},{lec:2,date:"2026-06-22"},{lec:3,date:"2026-06-23"},{lec:4,date:"2026-06-24"},{lec:5,date:"2026-06-25"},{lec:6,date:"2026-06-26"}
      ]},
      { id: "pc_08", name: "Structure of Atom", lectures: [
        {lec:1,date:"2026-06-27"},{lec:2,date:"2026-06-29"},{lec:3,date:"2026-06-30"},{lec:4,date:"2026-07-01"},{lec:5,date:"2026-07-02"},{lec:6,date:"2026-07-03"},{lec:7,date:"2026-07-04"}
      ]},
      { id: "pc_09", name: "Electrochemistry", lectures: [
        {lec:1,date:"2026-07-06"},{lec:2,date:"2026-07-07"},{lec:3,date:"2026-07-08"},{lec:4,date:"2026-07-09"},{lec:5,date:"2026-07-10"},{lec:6,date:"2026-07-11"},{lec:7,date:"2026-07-13"}
      ]}
    ]
  },
  "Inorganic Chemistry": {
    faculty: "Amitabh Sharma Sir",
    color: "#f59e0b",
    chapters: [
      { id: "ic_01", name: "Classification of Elements & Periodicity", lectures: [
        {lec:1,date:"2026-07-14"},{lec:2,date:"2026-07-15"},{lec:3,date:"2026-07-16"},{lec:4,date:"2026-07-17"},{lec:5,date:"2026-07-18"},{lec:6,date:"2026-07-20"},{lec:7,date:"2026-07-21"},{lec:8,date:"2026-07-22"},{lec:9,date:"2026-07-23"},{lec:10,date:"2026-07-24"}
      ]},
      { id: "ic_02", name: "Chemical Bonding and Molecular Structure", lectures: [
        {lec:1,date:"2026-07-25"},{lec:2,date:"2026-07-27"},{lec:3,date:"2026-07-28"},{lec:4,date:"2026-07-29"},{lec:5,date:"2026-07-30"},{lec:6,date:"2026-07-31"},{lec:7,date:"2026-08-01"},{lec:8,date:"2026-08-03"},{lec:9,date:"2026-08-04"},{lec:10,date:"2026-08-05"},{lec:11,date:"2026-08-06"},{lec:12,date:"2026-08-07"},{lec:13,date:"2026-08-08"},{lec:14,date:"2026-08-10"},{lec:15,date:"2026-08-11"},{lec:16,date:"2026-08-12"},{lec:17,date:"2026-08-13"},{lec:18,date:"2026-08-14"},{lec:19,date:"2026-08-17"},{lec:20,date:"2026-08-18"}
      ]},
      { id: "ic_03", name: "Coordination Compounds", lectures: [
        {lec:1,date:"2026-11-23"},{lec:2,date:"2026-11-24"},{lec:3,date:"2026-11-25"},{lec:4,date:"2026-11-26"},{lec:5,date:"2026-11-27"},{lec:6,date:"2026-11-28"},{lec:7,date:"2026-11-30"},{lec:8,date:"2026-12-01"},{lec:9,date:"2026-12-02"},{lec:10,date:"2026-12-03"},{lec:11,date:"2026-12-04"},{lec:12,date:"2026-12-05"},{lec:13,date:"2026-12-07"},{lec:14,date:"2026-12-08"}
      ]},
      { id: "ic_04", name: "Principles of Qualitative Analysis (Salt Analysis)", lectures: [
        {lec:1,date:"2026-12-09"},{lec:2,date:"2026-12-10"},{lec:3,date:"2026-12-11"},{lec:4,date:"2026-12-12"},{lec:5,date:"2026-12-14"},{lec:6,date:"2026-12-15"},{lec:7,date:"2026-12-16"},{lec:8,date:"2026-12-17"},{lec:9,date:"2026-12-18"},{lec:10,date:"2026-12-19"},{lec:11,date:"2026-12-21"}
      ]},
      { id: "ic_05", name: "P-Block Elements", lectures: [
        {lec:1,date:"2026-12-22"},{lec:2,date:"2026-12-23"},{lec:3,date:"2026-12-24"},{lec:4,date:"2026-12-26"}
      ]},
      { id: "ic_06", name: "The d and f Block Elements", lectures: [
        {lec:1,date:"2026-12-26"}
      ]}
    ]
  },
  "Organic Chemistry": {
    faculty: "Rohit Agarwal Sir",
    color: "#8b5cf6",
    chapters: [
      { id: "oc_01", name: "IUPAC Nomenclature", lectures: [
        {lec:1,date:"2026-08-19"},{lec:2,date:"2026-08-20"},{lec:3,date:"2026-08-21"},{lec:4,date:"2026-08-22"},{lec:5,date:"2026-08-24"},{lec:6,date:"2026-08-25"},{lec:7,date:"2026-08-26"},{lec:8,date:"2026-08-27"},{lec:9,date:"2026-08-29"},{lec:10,date:"2026-08-31"}
      ]},
      { id: "oc_02", name: "General Organic Chemistry (GOC)", lectures: [
        {lec:1,date:"2026-09-01"},{lec:2,date:"2026-09-02"},{lec:3,date:"2026-09-03"},{lec:4,date:"2026-09-04"},{lec:5,date:"2026-09-05"},{lec:6,date:"2026-09-07"},{lec:7,date:"2026-09-08"},{lec:8,date:"2026-09-09"},{lec:9,date:"2026-09-10"},{lec:10,date:"2026-09-11"},{lec:11,date:"2026-09-12"},{lec:12,date:"2026-09-15"}
      ]},
      { id: "oc_03", name: "Isomerism", lectures: [
        {lec:1,date:"2026-09-16"},{lec:2,date:"2026-09-17"},{lec:3,date:"2026-09-18"},{lec:4,date:"2026-09-19"},{lec:5,date:"2026-09-21"},{lec:6,date:"2026-09-22"},{lec:7,date:"2026-09-23"},{lec:8,date:"2026-09-24"},{lec:9,date:"2026-09-25"},{lec:10,date:"2026-09-26"},{lec:11,date:"2026-09-28"},{lec:12,date:"2026-09-29"},{lec:13,date:"2026-09-30"},{lec:14,date:"2026-10-01"},{lec:15,date:"2026-10-03"}
      ]},
      { id: "oc_04", name: "Hydrocarbons", lectures: [
        {lec:1,date:"2026-10-05"},{lec:2,date:"2026-10-06"},{lec:3,date:"2026-10-07"},{lec:4,date:"2026-10-08"},{lec:5,date:"2026-10-09"},{lec:6,date:"2026-10-10"},{lec:7,date:"2026-10-12"},{lec:8,date:"2026-10-13"},{lec:9,date:"2026-10-14"},{lec:10,date:"2026-10-15"},{lec:11,date:"2026-10-16"},{lec:12,date:"2026-10-17"}
      ]},
      { id: "oc_05", name: "Haloalkanes and Haloarenes", lectures: [
        {lec:1,date:"2026-10-19"},{lec:2,date:"2026-10-21"},{lec:3,date:"2026-10-22"},{lec:4,date:"2026-10-23"},{lec:5,date:"2026-10-24"},{lec:6,date:"2026-10-26"},{lec:7,date:"2026-10-27"},{lec:8,date:"2026-10-28"}
      ]},
      { id: "oc_06", name: "Alcohols, Phenols and Ethers", lectures: [
        {lec:1,date:"2026-10-29"},{lec:2,date:"2026-10-30"},{lec:3,date:"2026-10-31"},{lec:4,date:"2026-11-02"},{lec:5,date:"2026-11-03"},{lec:6,date:"2026-11-04"}
      ]},
      { id: "oc_07", name: "Aldehydes, Ketones and Carboxylic Acids", lectures: [
        {lec:1,date:"2026-11-05"},{lec:2,date:"2026-11-10"},{lec:3,date:"2026-11-12"},{lec:4,date:"2026-11-13"},{lec:5,date:"2026-11-14"},{lec:6,date:"2026-11-17"}
      ]},
      { id: "oc_08", name: "Amines", lectures: [
        {lec:1,date:"2026-11-18"},{lec:2,date:"2026-11-19"}
      ]},
      { id: "oc_09", name: "Biomolecules & Polymers", lectures: [
        {lec:1,date:"2026-11-20"},{lec:2,date:"2026-11-21"}
      ]}
    ]
  },
  Mathematics: {
    faculty: "Ashish Aggarwal Sir",
    color: "#ef4444",
    chapters: [
      { id: "mat_01", name: "Basic Mathematics", lectures: [
        {lec:1,date:"2026-04-22"},{lec:2,date:"2026-04-23"},{lec:3,date:"2026-04-24"},{lec:4,date:"2026-04-25"},{lec:5,date:"2026-04-27"},{lec:6,date:"2026-04-28"},{lec:7,date:"2026-04-29"},{lec:8,date:"2026-04-30"},{lec:9,date:"2026-05-02"},{lec:10,date:"2026-05-04"},{lec:11,date:"2026-05-05"},{lec:12,date:"2026-05-06"},{lec:13,date:"2026-05-07"},{lec:14,date:"2026-05-08"},{lec:15,date:"2026-05-09"},{lec:16,date:"2026-05-11"},{lec:17,date:"2026-05-12"}
      ]},
      { id: "mat_02", name: "Quadratic Equations", lectures: [
        {lec:1,date:"2026-05-13"},{lec:2,date:"2026-05-14"},{lec:3,date:"2026-05-15"},{lec:4,date:"2026-05-16"},{lec:5,date:"2026-05-18"},{lec:6,date:"2026-05-19"},{lec:7,date:"2026-05-20"},{lec:8,date:"2026-05-21"},{lec:9,date:"2026-05-22"}
      ]},
      { id: "mat_03", name: "Sequence and Series", lectures: [
        {lec:1,date:"2026-05-23"},{lec:2,date:"2026-05-25"},{lec:3,date:"2026-05-26"},{lec:4,date:"2026-05-27"},{lec:5,date:"2026-05-29"},{lec:6,date:"2026-05-30"},{lec:7,date:"2026-06-01"},{lec:8,date:"2026-06-02"}
      ]},
      { id: "mat_04", name: "Trigonometric Functions", lectures: [
        {lec:1,date:"2026-06-03"},{lec:2,date:"2026-06-04"},{lec:3,date:"2026-06-05"},{lec:4,date:"2026-06-06"},{lec:5,date:"2026-06-08"},{lec:6,date:"2026-06-09"},{lec:7,date:"2026-06-10"},{lec:8,date:"2026-06-11"}
      ]},
      { id: "mat_05", name: "Trigonometric Equations", lectures: [
        {lec:1,date:"2026-06-12"},{lec:2,date:"2026-06-13"},{lec:3,date:"2026-06-15"},{lec:4,date:"2026-06-16"}
      ]},
      { id: "mat_06", name: "Permutations and Combinations", lectures: [
        {lec:1,date:"2026-06-17"},{lec:2,date:"2026-06-18"},{lec:3,date:"2026-06-19"},{lec:4,date:"2026-06-20"},{lec:5,date:"2026-06-22"},{lec:6,date:"2026-06-23"},{lec:7,date:"2026-06-24"}
      ]},
      { id: "mat_07", name: "Binomial Theorem", lectures: [
        {lec:1,date:"2026-06-25"},{lec:2,date:"2026-06-26"},{lec:3,date:"2026-06-27"},{lec:4,date:"2026-06-29"},{lec:5,date:"2026-06-30"},{lec:6,date:"2026-07-01"}
      ]},
      { id: "mat_08", name: "Straight Lines", lectures: [
        {lec:1,date:"2026-07-02"},{lec:2,date:"2026-07-03"},{lec:3,date:"2026-07-04"},{lec:4,date:"2026-07-06"},{lec:5,date:"2026-07-07"},{lec:6,date:"2026-07-08"},{lec:7,date:"2026-07-09"},{lec:8,date:"2026-07-10"},{lec:9,date:"2026-07-11"},{lec:10,date:"2026-07-13"}
      ]},
      { id: "mat_09", name: "Circles", lectures: [
        {lec:1,date:"2026-07-14"},{lec:2,date:"2026-07-15"},{lec:3,date:"2026-07-16"},{lec:4,date:"2026-07-17"},{lec:5,date:"2026-07-18"},{lec:6,date:"2026-07-20"},{lec:7,date:"2026-07-21"},{lec:8,date:"2026-07-22"},{lec:9,date:"2026-07-23"},{lec:10,date:"2026-07-24"}
      ]},
      { id: "mat_10", name: "Conic Sections: Parabola", lectures: [
        {lec:1,date:"2026-07-25"},{lec:2,date:"2026-07-27"},{lec:3,date:"2026-07-28"},{lec:4,date:"2026-07-29"},{lec:5,date:"2026-07-30"},{lec:6,date:"2026-07-31"},{lec:7,date:"2026-08-01"}
      ]},
      { id: "mat_11", name: "Conic Sections: Ellipse", lectures: [
        {lec:1,date:"2026-08-03"},{lec:2,date:"2026-08-04"},{lec:3,date:"2026-08-05"},{lec:4,date:"2026-08-06"},{lec:5,date:"2026-08-07"},{lec:6,date:"2026-08-08"}
      ]},
      { id: "mat_12", name: "Conic Sections: Hyperbola", lectures: [
        {lec:1,date:"2026-08-10"},{lec:2,date:"2026-08-11"},{lec:3,date:"2026-08-12"},{lec:4,date:"2026-08-13"},{lec:5,date:"2026-08-14"},{lec:6,date:"2026-08-17"}
      ]},
      { id: "mat_13", name: "Determinants", lectures: [
        {lec:1,date:"2026-08-18"},{lec:2,date:"2026-08-19"},{lec:3,date:"2026-08-20"},{lec:4,date:"2026-08-21"}
      ]},
      { id: "mat_14", name: "Matrices", lectures: [
        {lec:1,date:"2026-08-22"},{lec:2,date:"2026-08-24"},{lec:3,date:"2026-08-25"},{lec:4,date:"2026-08-26"},{lec:5,date:"2026-08-27"},{lec:6,date:"2026-08-29"},{lec:7,date:"2026-08-31"}
      ]},
      { id: "mat_15", name: "Sets", lectures: [
        {lec:1,date:"2026-09-01"},{lec:2,date:"2026-09-02"},{lec:3,date:"2026-09-03"}
      ]},
      { id: "mat_16", name: "Relations and Functions", lectures: [
        {lec:1,date:"2026-09-04"},{lec:2,date:"2026-09-05"},{lec:3,date:"2026-09-07"},{lec:4,date:"2026-09-08"},{lec:5,date:"2026-09-09"},{lec:6,date:"2026-09-10"},{lec:7,date:"2026-09-11"},{lec:8,date:"2026-09-12"},{lec:9,date:"2026-09-15"}
      ]},
      { id: "mat_17", name: "Inverse Trigonometric Functions", lectures: [
        {lec:1,date:"2026-09-16"},{lec:2,date:"2026-09-17"},{lec:3,date:"2026-09-18"},{lec:4,date:"2026-09-19"}
      ]},
      { id: "mat_18", name: "Limit, Continuity and Differentiability", lectures: [
        {lec:1,date:"2026-09-21"},{lec:2,date:"2026-09-22"},{lec:3,date:"2026-09-23"},{lec:4,date:"2026-09-24"},{lec:5,date:"2026-09-25"},{lec:6,date:"2026-09-26"},{lec:7,date:"2026-09-28"},{lec:8,date:"2026-09-29"}
      ]},
      { id: "mat_19", name: "Method of Differentiation", lectures: [
        {lec:1,date:"2026-09-30"},{lec:2,date:"2026-10-01"},{lec:3,date:"2026-10-03"},{lec:4,date:"2026-10-05"},{lec:5,date:"2026-10-06"}
      ]},
      { id: "mat_20", name: "Application of Derivatives", lectures: [
        {lec:1,date:"2026-10-07"},{lec:2,date:"2026-10-08"},{lec:3,date:"2026-10-09"},{lec:4,date:"2026-10-10"},{lec:5,date:"2026-10-12"},{lec:6,date:"2026-10-13"},{lec:7,date:"2026-10-14"},{lec:8,date:"2026-10-15"}
      ]},
      { id: "mat_21", name: "Indefinite Integration", lectures: [
        {lec:1,date:"2026-10-16"},{lec:2,date:"2026-10-17"},{lec:3,date:"2026-10-19"},{lec:4,date:"2026-10-21"},{lec:5,date:"2026-10-22"},{lec:6,date:"2026-10-23"},{lec:7,date:"2026-10-24"}
      ]},
      { id: "mat_22", name: "Definite Integration", lectures: [
        {lec:1,date:"2026-10-26"},{lec:2,date:"2026-10-27"},{lec:3,date:"2026-10-28"},{lec:4,date:"2026-10-29"},{lec:5,date:"2026-10-30"},{lec:6,date:"2026-10-31"}
      ]},
      { id: "mat_23", name: "Application of Integrals", lectures: [
        {lec:1,date:"2026-11-02"},{lec:2,date:"2026-11-03"},{lec:3,date:"2026-11-04"}
      ]},
      { id: "mat_24", name: "Differential Equations", lectures: [
        {lec:1,date:"2026-11-05"},{lec:2,date:"2026-11-10"},{lec:3,date:"2026-11-12"},{lec:4,date:"2026-11-13"},{lec:5,date:"2026-11-14"}
      ]},
      { id: "mat_25", name: "Vector Algebra", lectures: [
        {lec:1,date:"2026-11-17"},{lec:2,date:"2026-11-18"},{lec:3,date:"2026-11-19"},{lec:4,date:"2026-11-20"},{lec:5,date:"2026-11-21"},{lec:6,date:"2026-11-23"},{lec:7,date:"2026-11-24"}
      ]},
      { id: "mat_26", name: "Three Dimensional Geometry", lectures: [
        {lec:1,date:"2026-11-25"},{lec:2,date:"2026-11-26"},{lec:3,date:"2026-11-27"},{lec:4,date:"2026-11-28"},{lec:5,date:"2026-11-30"},{lec:6,date:"2026-12-01"}
      ]},
      { id: "mat_27", name: "Complex Numbers", lectures: [
        {lec:1,date:"2026-12-02"},{lec:2,date:"2026-12-03"},{lec:3,date:"2026-12-04"},{lec:4,date:"2026-12-05"},{lec:5,date:"2026-12-07"},{lec:6,date:"2026-12-08"},{lec:7,date:"2026-12-09"},{lec:8,date:"2026-12-10"},{lec:9,date:"2026-12-11"}
      ]},
      { id: "mat_28", name: "Probability", lectures: [
        {lec:1,date:"2026-12-12"},{lec:2,date:"2026-12-14"},{lec:3,date:"2026-12-15"},{lec:4,date:"2026-12-16"},{lec:5,date:"2026-12-17"},{lec:6,date:"2026-12-18"},{lec:7,date:"2026-12-19"}
      ]},
      { id: "mat_29", name: "Statistics", lectures: [
        {lec:1,date:"2026-12-21"},{lec:2,date:"2026-12-22"},{lec:3,date:"2026-12-23"}
      ]},
      { id: "mat_30", name: "Solution of Triangle", lectures: [
        {lec:1,date:"2026-12-24"},{lec:2,date:"2026-12-26"}
      ]}
    ]
  }
};

const TEST_PLANNER = [
  { id:"t01", date:"2026-05-17", name:"Short Test-1", type:"Part Test", pattern:"Short Test" },
  { id:"t02", date:"2026-05-31", name:"JEE Main-1", type:"Part Test", pattern:"JEE Main" },
  { id:"t03", date:"2026-06-14", name:"JEE Main-2", type:"Part Test", pattern:"JEE Main" },
  { id:"t04", date:"2026-06-28", name:"JEE Advanced-1", type:"Part Test", pattern:"JEE Advanced" },
  { id:"t05", date:"2026-07-12", name:"JEE Main-3", type:"Part Test", pattern:"JEE Main" },
  { id:"t06", date:"2026-07-26", name:"JEE Main-4", type:"Part Test", pattern:"JEE Main" },
  { id:"t07", date:"2026-08-09", name:"AITS-1", type:"Part Test", pattern:"Main" },
  { id:"t08", date:"2026-08-23", name:"JEE Advanced-2", type:"Part Test", pattern:"JEE Advanced" },
  { id:"t09", date:"2026-09-06", name:"JEE Main-5", type:"Part Test", pattern:"JEE Main" },
  { id:"t10", date:"2026-09-20", name:"AITS-2", type:"Part Test", pattern:"Main" },
  { id:"t11", date:"2026-09-27", name:"AITS-3", type:"Part Test", pattern:"Advanced" },
  { id:"t12", date:"2026-10-11", name:"JEE Main-6", type:"Part Test", pattern:"JEE Main" },
  { id:"t13", date:"2026-11-01", name:"AITS-4", type:"Part Test", pattern:"Main" },
  { id:"t14", date:"2026-11-22", name:"JEE Advanced-3", type:"Part Test", pattern:"JEE Advanced" },
  { id:"t15", date:"2026-12-13", name:"AITS-5", type:"Part Test", pattern:"Main" },
  { id:"t16", date:"2026-12-20", name:"AITS-6", type:"Part Test", pattern:"Advanced" },
  { id:"t17", date:"2027-01-03", name:"JEE Main-7", type:"Full Test", pattern:"JEE Main" },
  { id:"t18", date:"2027-01-10", name:"AITS-7", type:"Part Test", pattern:"Main" },
  { id:"t19", date:"2027-01-13", name:"AITS-8", type:"Full Test", pattern:"Main" },
  { id:"t20", date:"2027-01-17", name:"AITS-9", type:"Full Test", pattern:"Main" },
  { id:"t21", date:"2027-01-20", name:"AITS-10", type:"Full Test", pattern:"Main" },
  { id:"t22", date:"2027-02-14", name:"AITS-11", type:"Full Test", pattern:"Main" },
  { id:"t23", date:"2027-02-28", name:"AITS-12", type:"Full Test", pattern:"Main" },
  { id:"t24", date:"2027-03-07", name:"AITS-13", type:"Full Test", pattern:"Advanced" },
  { id:"t25", date:"2027-03-14", name:"AITS-14", type:"Full Test", pattern:"Main" },
  { id:"t26", date:"2027-03-21", name:"AITS-15", type:"Full Test", pattern:"Main" },
  { id:"t27", date:"2027-03-28", name:"AITS-16", type:"Full Test", pattern:"Main" },
  { id:"t28", date:"2027-04-18", name:"AITS-17", type:"Full Test", pattern:"Advanced" },
  { id:"t29", date:"2027-04-25", name:"AITS-18", type:"Full Test", pattern:"Advanced" },
  { id:"t30", date:"2027-05-02", name:"AITS-19", type:"Full Test", pattern:"Advanced" },
  { id:"t31", date:"2027-05-09", name:"AITS-20", type:"Full Test", pattern:"Advanced" },
  { id:"t32", date:"2027-05-16", name:"AITS-21", type:"Full Test", pattern:"Advanced" }
];
