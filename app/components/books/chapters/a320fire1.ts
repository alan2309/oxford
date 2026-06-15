import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - FIRE PROTECTION - 01",
  questions: [
    {
      id: 1,
      question:
        "The avionics compartment is the only area where there is no fire extinguishing system installed.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 2,
      question: "Engine fire loops are installed in the:",
      options: ["Pylon nacelle", "Core", "Fan", "All the above"],
      answer: 3,
    },
    {
      id: 3,
      question:
        "If a break in both engine fire loops occurs within _____ seconds of each other a _____ will occur.",
      options: [
        "8 sec./ a FIRE warning",
        "7 sec./ a FIRE DET FAULT message on ECAM",
        "10 sec./ a FIRE DET FAULT message on ECAM",
        "5 sec./ a FIRE warning",
      ],
      answer: 3,
    },
    {
      id: 4,
      question:
        "The aircraft has dual fire detector loops to ensure that a fault in one fire loop will not affect fire detection capabilities.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 5,
      question:
        "If there is an APU fire in flight the APU:",
      options: [
        "Will automatically shut down and the fire bottle will discharge.",
        "Must be shut down manually and the agent manually discharged.",
        "Must be shut down manually but the fire bottle will discharge automatically.",
      ],
      answer: 1,
    },
    {
      id: 6,
      question: "Fire protection for the cargo compartments includes:",
      options: [
        "Two fire bottles; one for each compartment.",
        "One single shot fire extinguisher for the aft compartment only.",
        "One single shot fire extinguisher agents which can be discharged to either compartment.",
      ],
      answer: 2,
    },
    {
      id: 7,
      question: "The engine extinguishing agent switch is armed when:",
      options: [
        "The DISCH light is on.",
        "The engine fire switch illuminates.",
        "The engine fire switch is released out.",
      ],
      answer: 2,
    },
    {
      id: 8,
      question: "When the APU FIRE SWITCH is released out:",
      options: [
        "The Fire bottle is discharged.",
        "The Fuel HP valve is closed.",
        "The APU bleed and crossbleed valves are closed.",
      ],
      answer: 2,
    },
    {
      id: 9,
      question:
        "DISCH light on either the engine or APU fire agent switches indicates:",
      options: [
        "The APU or engine FIRE switch has been pushed.",
        "The extinguisher bottle has been discharged.",
        "A fault has occurred in the respective fire bottle.",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "The GEN 1 LINE smoke light indicates:",
      options: [
        "A fire caused by number 1 generator.",
        "Smoke in the avionics ventilation system.",
        "Smoke in the cargo ventilation system.",
      ],
      answer: 1,
    },
    {
      id: 11,
      question: "Can the APU FIRE test be performed using battery power only?",
      options: ["Yes.", "No."],
      answer: 0,
    },
    {
      id: 12,
      question:
        "When the aircraft is on the ground and the APU is started on battery power only, is fire protection available?",
      options: [
        "Yes, the APU will initiate an auto shutdown and discharge the extinguishing agent.",
        "No, but the APU will initiate an auto shutdown.",
        "No, automatic fire protection is only available if AC power is available.",
      ],
      answer: 0,
    },
    {
      id: 13,
      question:
        "How many fire extinguishing bottles are available for fighting an APU fire?",
      options: [
        "One.",
        "Two.",
        "One cylinder shared with the aft cargo compartment.",
        "Two cylinders shared with the aft cargo compartment.",
      ],
      answer: 0,
    },
    {
      id: 14,
      question: "APU fire detection is accomplished by:",
      options: [
        "A two channel SDCU located in the APU compartment.",
        "Two parallel fire detection loops.",
        "One fire detection loop.",
        "A three channel SDCU located in the APU compartment.",
      ],
      answer: 1,
    },
    {
      id: 15,
      question:
        "Engine heat sensing are located in pylon nacelle, engine core and fan section.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 16,
      question:
        "After an APU fire has been detected how long will the chime continue to sound?",
      options: [
        "Until the crew pushes the red MASTER WARN push button.",
        "Until the crew pushes and releases the guarded red APU FIRE push button.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 17,
      question:
        "STATUS page: INOP SYS indicates \"ENG1 LOOP B\".",
      options: [
        "One fire detection loop has failed. Fire detection for both engines is not available.",
        "One detection loop for engine 1 has failed. Fire detection for both engines is still available.",
        "One fire detection loop of engine 1 has failed. Fire detection for engine 1 is inoperative.",
        "Both fire detection loops of engine 1 have failed. Fire detection for engine 1 is inoperative.",
      ],
      answer: 1,
    },
    {
      id: 18,
      question:
        "Which of the following have automatic fire extinguishing systems?",
      options: [
        "APU, and lavatory waste bins.",
        "APU, lavatory waste bins and avionics bay.",
        "APU, aft cargo, forward cargo, lavatory waste bins and avionics bay.",
        "APU, forward and aft cargo, lavatory and waste bins",
      ],
      answer: 0,
    },
    {
      id: 19,
      question:
        "The aft cargo compartment smoke detection system consists of:",
      options: [
        "A dual loop smoke detector.",
        "Four smoke detectors and a two channel smoke detection control unit.",
        "One smoke detector, one smoke detection control unit and two automatically discharging fire extinguishers.",
        "Three smoke detectors, one smoke detection control unit and two automatically discharging fire extinguishers.",
      ],
      answer: 1,
    },
    {
      id: 20,
      question:
        "If an engine fire is detected, when will the pedestal mounted red FIRE annunciator light extinguish?",
      options: [
        "When the crew pushes the red MASTER WARN push button.",
        "Only after the fire warning no longer exists.",
        "Only after the crew selects the adjacent ENG MASTER switch to off.",
      ],
      answer: 1,
    },
    {
      id: 21,
      question:
        "How long will the red APU FIRE pb on the overhead be illuminated?",
      options: [
        "Until the crew pushes and releases the guarded red APU FIRE push button.",
        "For as long as the fire warning is present.",
        "Until the crew pushes the red MASTER WARN push button.",
      ],
      answer: 1,
    },
    {
      id: 22,
      question:
        ": Should you lose both loops or FDU, fire detection is no longer available for the respective engine or the APU",
      options: ["True", "False."],
      answer: 0,
    },
    {
      id: 23,
      question:
        "What is indicated by a missing red APU thermal plug during an exterior preflight?",
      options: [
        "This is normal indication, the red APU thermal plug only appears if the APU halon cylinder is low.",
        "An APU fire agent thermal discharge has occurred.",
        "An external fire discharge has been activated.",
      ],
      answer: 1,
    },
    {
      id: 24,
      question:
        "If an engine fire is detected, when will the guarded red ENG FIRE push button light extinguish?",
      options: [
        "Only after the fire warning no longer exists.",
        "When the crew pushes and releases the guarded red ENGINE FIRE pushbutton.",
        "When the crew pushes the red MASTER WARN pushbutton.",
        "When the crew pushes the red MASTER WARN pushbutton and then releases the guarded ENGINE FIRE pushbutton",
      ],
      answer: 0,
    },
    {
      id: 25,
      question:
        ": In the event a lavatory smoke detector detects smoke:",
      options: [
        "Warnings will be generated only in the cockpit.",
        "Warnings will be generated only on the flight deck.",
        "warnings will be generated in the cockpit and in the cabin.",
      ],
      answer: 2,
    },
    {
      id: 26,
      question:
        "Are there any warnings to alert ground personnel when there is a fire in the APU compartment?",
      options: [
        "Yes, but only if previously selected to automatic by the ground personnel.",
        "No, APU fire indications are only present in the cockpit.",
        "Yes, the external fire warning horn will sound and the APU red fire light will illuminate.",
      ],
      answer: 2,
    },
    {
      id: 27,
      question:
        "What systems are affected when the guarded red ENGINE FIRE push button is pushed and released?",
      options: [
        "The Master Warning and the chime will be canceled and the AGENT pb's will be armed.",
        "All fluids, pneumatics and electrics relating to that engine are shut off",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 28,
      question:
        "The avionics smoke detection system consists of the following:",
      options: [
        "A smoke detector, smoke detection control unit and one halon cylinder.",
        "A smoke detector, and smoke detection control unit.",
        "A smoke detector, heat detector, smoke detection control unit and one halon cylinder.",
        "A smoke detector, smoke detection control unit and two halon cylinders.",
      ],
      answer: 1,
    },
    {
      id: 29,
      question: "Will an APU fire test shut down the APU?",
      options: ["Yes.", "No."],
      answer: 1,
    },
    {
      id: 30,
      question: "Illumination of the GEN 1 LINE SMOKE light indicates:",
      options: [
        "A fire has been detected in the avionics compartment.",
        "A satisfactory test of the avionics compartment smoke detection control unit.",
        "Smoke has been detected in the avionics compartment ventilation duct.",
        "A fire has been detected in the electronics compartment.",
      ],
      answer: 2,
    },
    {
      id: 31,
      question:
        "In the event an aft cargo compartment smoke detector detects smoke:",
      options: [
        "Extinguishing is automatic.",
        "Extinguishing is automatic only while on the ground.",
        "The crew must depress the appropriate DISCH switch.",
      ],
      answer: 2,
    },
    {
      id: 32,
      question:
        "How many halon fire extinguishing cylinders are there per engine?",
      options: [
        "Each engine has two fire extinguishers.",
        "Each engine has it's own dedicated fire extinguisher and has the capability to share the other engine's cylinder.",
        "Each engine has it's own dedicated fire extinguisher and has the capability to share one centrally located halon cylinder.",
        "Each engine has one fire extinguisher.",
      ],
      answer: 0,
    },
    {
      id: 33,
      question: "The APU provides for automatic fire extinguishing:",
      options: [
        "On the ground only.",
        "On the ground and in flight.",
        "Only when selected to automatic by ground personnel.",
      ],
      answer: 0,
    },
    {
      id: 34,
      question:
        "You have detected avionics smoke. You have selected the GEN 1 LINE push button off and the RAT has been deployed. Generator 2 has been removed from the system. Which of the following is TRUE?",
      options: [
        "The cargo fire bottle automatically fires.",
        "The avionics fire bottle automatically discharges.",
        "The aircraft will be in the Emergency Electrical Configuration",
      ],
      answer: 2,
    },
    {
      id: 35,
      question:
        "In conjunction with illumination of the GEN 1 LINE SMOKE light and MASTER CAUT light:",
      options: [
        "The BLOWER and EXTRACT push button FAULT lights will be illuminated.",
        "Only the BLOWER FAULT light will be illuminated.",
        "Only the EXTRACT FAULT light will be illuminated.",
      ],
      answer: 0,
    },
    {
      id: 36,
      question:
        "After depressing the CARGO SMOKE TEST push button once, a satisfactory test of the aft cargo compartment smoke detector consist of:",
      options: [
        "Two complete cycles with associated warnings.",
        "Not needed as this system self-tests during the first engine start.",
        "One complete cycle with associated warnings.",
        "Three complete cycles with associated warnings.",
      ],
      answer: 0,
    },
    {
      id: 37,
      question:
        "How does the APU fire test on battery power differ from the APU fire test with all busses powered?",
      options: [
        "There is no difference.",
        "While on battery power, only the red APU FIRE and AGENT/DISCH push button will illuminate.",
        "It is not possible to test the APU fire protection while on battery power.",
      ],
      answer: 1,
    },
    {
      id: 38,
      question:
        "If you perform the APU FIRE TEST with only DC power available, you get the MASTER WARN on the ECAM.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 39,
      question:
        "In the event an aft cargo compartment smoke detector detects smoke:",
      options: [
        "Only an ECAM message will be generated.",
        "Only a MASTER WARN and a CRC will be generated.",
        "A MASTER WARN, CRC and an ECAM message will be generated.",
        "A CRC and an ECAM message will be generated.",
      ],
      answer: 2,
    },
    {
      id: 40,
      question:
        "During the walk-around, you have to check that the APU Fire extinguisher overpressure indication (green disc) is in place. This is an indication that the fire bottle has not been discharged.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 41,
      question:
        "The AFT SMOKE light closes the aft cargo inlet and outlet isolation valves and shuts off the aft cargo extraction fan.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 42,
      question: "Each lavatory is equipped with:",
      options: [
        "Two smoke detectors and one smoke detection control unit.",
        "One smoke detector and one smoke detection control unit.",
        "One smoke detector, and for lavatory waste bins, an automatically discharging fire extinguisher.",
        "Two smoke detectors and two automatically discharging fire extinguishers.",
      ],
      answer: 2,
    },
    {
      id: 43,
      question: "Each engine nacelle and pylon area is equipped with:",
      options: [
        "Two fire detection loops.",
        "A single fire detection loop.",
        "Two smoke detectors and two fire detection loops.",
        "A single fire detection loop and a single smoke detector.",
      ],
      answer: 0,
    },
    {
      id: 44,
      question:
        "If an APU fire is detected on the ground, the APU shuts down automatically and the agent is discharged ______ after the warning is activated.",
      options: ["Immediately", "1 second.", "3 seconds.", "6 seconds."],
      answer: 2,
    },
    {
      id: 45,
      question:
        "If a break in both engine fire loops occurs within 5 seconds of each other, a will occur.",
      options: [
        "AFIRE DET FAULT message on ECAM",
        "A FIRE DET FAULT message on ECAM",
        "A FIRE warning",
      ],
      answer: 2,
    },
    {
      id: 46,
      question: "The engine fire extinguishing squib is armed when:",
      options: [
        "The DISCH light is on",
        "The engine fire p/b illuminates",
        "The engine fire p/b is released out.",
      ],
      answer: 2,
    },
    {
      id: 47,
      question:
        "STATUS page: INOP SYS indicates 'ENG1 LOOP B'.",
      options: [
        "No.1 fire detection loop has failed. Fire detection for both engines is not available.",
        "LOOP B fire detection loop for engine 1 has failed but fire detection for both engines is still available.",
        "No.1 fire detection loop of engine 1 has failed. Fire detection for engine 1 is inoperative.",
        "Both fire detection loops of engine 1 have failed. Fire detection for engine 1 is inoperative.",
      ],
      answer: 1,
    },
    {
      id: 48,
      question:
        "If an engine fire is detected, when will the pedestal mounted red FIRE annunciator light extinguish?",
      options: [
        "When the crew pushes the red MASTER WARN push button.",
        "After the fire getting extinguished.",
        "Only after the crew selects the adjacent ENG MASTER switch to off",
      ],
      answer: 1,
    },
    {
      id: 49,
      question:
        "If an engine fire is detected, when will the guarded red ENG FIRE push button light extinguish?",
      options: [
        "When the fire warning no longer exists.",
        "When the crew pushes and releases the guarded red ENGINE FIRE pushbutton.",
        "When the crew pushes the red MASTER WARN pushbutton.",
        "When the crew pushes the red MASTER WARN pushbutton and then releases the guarded ENGINE FIRE pushbutton",
      ],
      answer: 0,
    },
    {
      id: 50,
      question:
        "What systems are affected when the guarded red ENGINE FIRE push button is pushed and released?",
      options: [
        "The Master Warning and the chime will be canceled and the AGENT pb's will be armed.",
        "Pneumatics and electrics relating to that engine are shut off",
        "Related hyd sys is cut-off.",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 51,
      question:
        "In addition to the CRC and red MASTER WARN light, a good engine fire test will display which of the following (AC power available)?",
      options: [
        "The CRC and red MASTER WARN light indicate a positive engine fire test.",
        "Lower ECAM engine page, pedestal mounted red FIRE annunciator, red ENG FIRE push button and the AGENT SQUIB/DISC lights illuminate.",
        "E/WD red 1 (2) ENG FIRE warning, lower ECAM engine page, red FIRE annunciator, red ENG FIRE push button, and AGENT SQUIB/DISC.",
      ],
      answer: 2,
    },
    {
      id: 52,
      question:
        "How many fire extinguishing bottle are there per engine?",
      options: [
        "Each engine has two fire extinguishers.",
        "Each engine has it's own dedicated fire extinguisher and has the capability to share the other engine's cylinder.",
        "Each engine has it's own dedicated fire extinguisher and has the capability to share one centrally located halon cylinder.",
        "Each engine has one fire extinguisher",
      ],
      answer: 0,
    },
    {
      id: 53,
      question:
        "If there is an APU fire in flight the APU:",
      options: [
        "Will automatically shut down and the fire bottle will discharge..",
        "Must be shut down manually and the agent manually discharged.",
        "Must be shut down manually but the fire bottle will discharge automatically.",
      ],
      answer: 1,
    },
    {
      id: 54,
      question: "When the APU FIRE P/B SWITCH is released out:",
      options: [
        "The Fire bottle is discharged.",
        "The Fuel HP valve is closed",
        "The APU bleed and crossbleed valves are closed..",
        "All of the above",
      ],
      answer: 2,
    },
    {
      id: 55,
      question: "Can the APU FIRE test be performed using battery power only?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 56,
      question:
        "The APU and engine FIRE test can be performed with battery power only.",
      options: ["Yes", "No"],
      answer: 1,
    },
    {
      id: 57,
      question:
        "How many fire extinguishing bottles are available for fighting an APU fire?",
      options: ["One", "Two."],
      answer: 0,
    },
    {
      id: 58,
      question: "APU fire detection is accomplished by:",
      options: ["Two parallel fire detection loops", "One fire detection loop."],
      answer: 0,
    },
    {
      id: 59,
      question:
        "Should you loose both loops or Fire Detection Unit, fire detection is no longer available for the respective engine.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 60,
      question:
        "Are there any warnings to alert ground personnel when there is a fire in the APU compartment?",
      options: [
        "Yes, but only if previously selected to automatic by the ground personnel.",
        "No, APU fire indications are only present in the cockpit.",
        "Yes, the external fire warning horn will sound and the APU red fire light will illuminate.",
      ],
      answer: 2,
    },
    {
      id: 61,
      question: "Will an APU fire test shut down the APU?",
      options: ["Yes", "No"],
      answer: 1,
    },
    {
      id: 62,
      question:
        "If you perform the APU FIRE TEST with only DC power available, you get the MASTER WARN",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 63,
      question:
        "How does the APU fire test on battery power differ from the APU fire test with all busses powered?",
      options: [
        "There is no difference.",
        "While on battery power, only the red APU FIRE and AGENT/DISC push button will illuminate.",
        "It is not possible to test the APU fire protection while on battery power.",
      ],
      answer: 1,
    },
    {
      id: 64,
      question:
        "During the walk-around, you have to check that the APU Fire extinguisher overpressure indication (green disc) is in place. This is an indication that the fire bottle has not been discharged.",
      options: ["True", "False. It's a red disc"],
      answer: 1,
    },
    {
      id: 65,
      question:
        "What is indicated by a missing red APU thermal plug during an exterior preflight?",
      options: [
        "This is normal indication, the red APU thermal plug only appears if the APU halon cylinder is low.",
        "An APU fire agent thermal discharge has occurred.",
        "An external fire discharge has been activated.",
      ],
      answer: 1,
    },
    {
      id: 66,
      question:
        "If an APU fire is detected on the ground, the APU shuts down automatically and the agent is discharged after the warning is activated.",
      options: ["Immediately", "1 second", "3 seconds.", "6 seconds."],
      answer: 2,
    },
    {
      id: 67,
      question:
        "The avionics compartment is the only area where there is no fire extinguishing system installed.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 68,
      question: "Fire protection for the cargo compartments includes :",
      options: [
        "Two fire bottles; one for each compartment.",
        "Two fire bottles, but will be used only in either FWD or AFT cargo compartment.",
      ],
      answer: 1,
    },
    {
      id: 69,
      question:
        "In the event an aft cargo compartment smoke detector detects smoke:",
      options: [
        "Only an ECAM message will be generated",
        "Only a MASTER WARN and a CRC will be generated",
        "A MASTER WARN, CRC and an ECAM message will be generated.",
        "A CRC and an ECAM message will be generated.",
      ],
      answer: 2,
    },
    {
      id: 70,
      question:
        "Which of the following have automatic fire extinguishing systems?",
      options: [
        "APU, and lavatory waste bins.",
        "APU, lavatory waste bins and avionics bay",
        "APU, aft cargo, forward cargo, lavatory waste bins and avionics bay..",
        "APU, forward and aft cargo, lavatory and waste bins.",
      ],
      answer: 0,
    },
    {
      id: 71,
      question:
        "The APU test switch on the APU Auto Exting panel when pushed will:",
      options: [
        "Test APU fire warning.",
        "Test auto extinguishing.",
        "Test auto shutdown circuit and if APU was running, it shuts down APU.",
        "All the above.",
      ],
      answer: 3,
    },
    {
      id: 72,
      question:
        "When smoke is detected in the ventilation extraction duct:",
      options: [
        "AVNCS SMOKE (red) warning appears on E/WD along with GEN 1 LINE SMOKE light on EMER ELEC PWR panel, and CRC and Master warning",
        "AVNCS SMOKE (amber) caution appears on E/WD along with GEN 1 LINE SMOKE light on EMER ELEC PWR panel, and Single chime & Master Caution.",
        "FAULT Lts. on Blower & Extract pbs also illuminate alongwith warnings as per {A} above.",
        "FAULT Lts. on Blower & Extract pbs also illuminate alongwith cautions as per {B} above.",
      ],
      answer: 3,
    },
    {
      id: 73,
      question:
        "With reference to the cargo compartment fire extinguishing system, which statement is true?",
      options: [
        "AVNCS SMOKE (red) warning There are two fire bottles; one for the FWD compartment and one for the AFT.",
        "There is only one fire bottle; pressing either DISCH pb discharges the extinguishant into the respective compartment",
        "There are two fire bottles and both have to be used either in FWD or AFT.When the FWD or AFT toggle sw is selected to AGENT1, AGENT-1 is discharged into the appropriate compartment and after 60 minutes the DISCH AGENT 2 light appears.",
        "There is only one fire bottle, when it is discharged, both amber DISCH lights come on",
      ],
      answer: 2,
    },
    {
      id: 74,
      question:
        "As regards SMOKE in Cargo appearing on ground with Cargo Doors closed:",
      options: [
        "Order ground staff to open the affected Cargo Door immediately.",
        "Order the ground staff not to open the affected CARGO Door unless all the pax have disembarked and fire services are present.",
        "Affected Cargo Door must remain closed as long as SMOKE warning remains ON",
      ],
      answer: 1,
    },
  ],
};