import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - INDICATING & RECORDING - 01",
  questions: [
    {
      id: 1,
      question: "What does a pulsing green engine parameter indicate?",
      options: [
        "An ADVISORY, the parameter is about to reach the limit.",
        "An ADVISORY, the parameter is out of the limits",
        "A MEMO, the parameter has a faulty indication.",
        "A level 3 failure requiring immediate crew action.",
      ],
      answer: 0,
    },
    {
      id: 2,
      question: "On a bottom of the STATUS page, what does the green arrow mean?",
      options: [
        "It is a reminder to land as soon as possible.",
        "It indicates that there is a system page behind.",
        "It means that there is more information to be seen.",
      ],
      answer: 2,
    },
    {
      id: 3,
      question: "When should the EMER CANC push button be used?",
      options: [
        "At the completion of an ECAM procedure for an abnormal procedure.",
        "Whenever a LEVEL 3 warning or LEVEL 2 caution occurs.",
        "Whenever a repetitive visual or aural warning, or caution is received that the crew has determined to be false.",
      ],
      answer: 2,
    },
    {
      id: 4,
      question:
        "The actual speed is indicated by the ______ reference line.",
      options: ["yellow", "amber", "red", "white"],
      answer: 0,
    },
    {
      id: 5,
      question:
        "If a PFD fails, does anything happen automatically?",
      options: [
        "The ATT HDG switch must be used on the switching panel in order to recover PFD information.",
        "The image automatically transfers to the display formerly occupied by the ND.",
        "The image automatically transfers to the UPPER ECAM.",
        "It has to be manually activated.",
      ],
      answer: 1,
    },
    {
      id: 6,
      question:
        ": Course information from the #1 ILS receiver will be displayed:",
      options: [
        "On the captain's PFD when the captain's ILS push button is selected ON.",
        "On the FO's PFD when his ILS push button is selected on and on the captain's ND, when the captain's ND is selected to ILS ROSE.",
        "On the captain's PFD and ND when the captain's ILS push button is selected ON.",
        "The first two statements are correct",
      ],
      answer: 0,
    },
    {
      id: 7,
      question:
        "Information from the #1 VOR receiver will be displayed:",
      options: [
        "On the capt's PFD when the captain's VOR bearing selector is selected to VOR.",
        "On the capt 's ND when the capt 's VOR bearing selector is selected to VOR.",
        "VOR #1 course information is available on the captain's PFD and ND when the captain's ILS pb is selected ON.",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "What causes a display unit (DU) to go blank?",
      options: [
        "Loss of power.",
        "Display unit internal failure.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 9,
      question:
        "What causes a DU to display a black screen with a white diagonal line?",
      options: ["DMC failure.", "No power.", "Both are correct."],
      answer: 0,
    },
    {
      id: 10,
      question:
        "The maximum speed to select next higher flap setting is indicated by two amber dashes.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 11,
      question:
        "VOR, ILS, and NDB raw data information is displayed on the ND in which of the following modes?",
      options: [
        "VOR, RMI and NDB information may be displayed in the ARC or ROSE NAV modes.",
        "VOR and ILS information can be displayed in the ROSE VOR and ROSE ILS modes respectively",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 12,
      question:
        "The presence of VOR1 in red on the ND indicates:",
      options: [
        "The VOR station currently tuned is out of range.",
        "The VOR station currently tuned is out of service.",
        "The # 1 VOR receiver is inoperative.",
        "The VOR station currently tuned is out of range.",
      ],
      answer: 2,
    },
    {
      id: 13,
      question:
        "What is the meaning of \"9000\" in blue at the top of the altitude scale?",
      options: [
        "It marks the FCU selected altitude.",
        "It marks the airfield elevation.",
        "It marks the transition altitude.",
        "It marks the decision height.",
      ],
      answer: 0,
    },
    {
      id: 14,
      question: "How many DMC's are there?",
      options: ["1", "2", "3", "4"],
      answer: 2,
    },
    {
      id: 15,
      question:
        "After a single DMC failure, how could a crew member recover the display units?",
      options: [
        "It is done automatically.",
        "Once a DMC has failed, the information is unrecoverable.",
        "Rotate the EIS DMC switch on the switching panel to replace the failed DMC with DMC #3.",
      ],
      answer: 2,
    },
    {
      id: 16,
      question:
        "Where is information displayed by DMC #1 and DMC#2?",
      options: [
        "DMC#1 supplies data to PFD#1, ND#1, and lower ECAM. DMC #2 supplies data to PFD#2, ND#2, and upper ECAM.",
        "DMC#1 supplies data to PFD#1, PFD#2, and upper ECAM. DMC #2 supplies data to ND#1, ND#2, and lower ECAM.",
        "DMC#1 supplies data to PFD#1, ND#1, and upper ECAM. DMC #2 supplies data to PFD#2, ND#2, and lower ECAM.",
        "DMC#1 supplies data to PFD#1, ND#2, and lower ECAM. DMC #2",
      ],
      answer: 2,
    },
    {
      id: 17,
      question:
        ": If the lower ECAM DU fails, is there a way to retrieve that information?",
      options: [
        "By pressing and holding the related systems page push button on the ECAM control panel, the page will be displayed on the UPPER ECAM.",
        "By rotating ECAM/ND XFR switch on switching panel, lower ECAM page will be transferred to either Capt or FO's ND.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 18,
      question:
        "If the UPPER ECAM DU fails, what will be displayed on the lower unit",
      options: [
        "System display page.",
        "Engines and Warning page (E/WD)",
        "Status page.",
      ],
      answer: 1,
    },
    {
      id: 19,
      question:
        "Weather radar can be displayed in what modes on the ND?",
      options: [
        "ARC and ROSE NAV modes only.",
        "ROSE VOR and ROSE ILS modes.",
        "ROSE VOR and ROSE ILS modes.",
        "All modes except plan.",
      ],
      answer: 3,
    },
    {
      id: 20,
      question:
        "RNAV position information is displayed on the ND in which of the following modes?",
      options: [
        "ARC and ROSE NAV modes only.",
        "ROSE VOR and ROSE ILS modes.",
        "ARC, ROSE and PLAN modes.",
        "ROSE VOR mode.",
      ],
      answer: 0,
    },
    {
      id: 21,
      question:
        "Once the crewmember has completed viewing a specific system, what is the correct procedure for clearing the screen and returning it to a normal presentation?",
      options: [
        "Press the respective system push button again.",
        "It goes away by itself",
        "Press CLR on the ECAM control panel.",
        "Press twice CLR on the ECAM control panel.",
      ],
      answer: 0,
    },
    {
      id: 22,
      question:
        "After the engine shutdown, you observe a pulsing STS message. What does it mean?",
      options: [
        "It is an indication that at least one system requires crew attention.",
        "It is an indication that the aircraft has not been shut down correctly.",
        "It is a reminder that the status page holds a maintenance message.",
      ],
      answer: 2,
    },
    {
      id: 23,
      question:
        "The upper ECAM Display Unit (DU) has failed. You want to see the DOOR/OXY page. How can you see it?",
      options: [
        "You have to press and hold the DOOR key on the ECP",
        "You have to switch the EIS DMC to CAPT3",
        "You have to press and hold the RCL key on the ECP.",
      ],
      answer: 0,
    },
    {
      id: 24,
      question:
        "Both ECAM screens have failed. Is it possible to get E/WD indications?",
      options: [
        "Yes, the E/WD is automatically transferred to one of the NDs.",
        "No. The E/WD is lost until the aircraft can be repaired.",
        "Yes, to get E/WD information. It must be manually transferred to one of the NDs.",
        "Yes. E/WD information is automatically transferred to the the F/O's PFD in the event of an ECAM warning.",
      ],
      answer: 2,
    },
    {
      id: 25,
      question: "How are the FMAs displayed on the PFD?",
      options: [
        "There are 5 columns and 3 rows.",
        "There are 3 columns and 5 rows.",
        "There are 3 columns and 2 rows.",
        "There are 4 columns and 2 rows.",
      ],
      answer: 0,
    },
    {
      id: 26,
      question:
        "In case of a double FWC failure master caution light, master warning light, aural warnings and ECAM cautions and warnings are lost.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 27,
      question:
        "How did the PNF cancel the caution for the NAV ILS 1 FAULT before calling the STATUS page on the ECP?",
      options: [
        "By pressing the EMER CANC pushbutton.",
        "By pressing the CLR key",
        "By pressing the STS key",
        "By pressing the ALL key.",
      ],
      answer: 1,
    },
    {
      id: 28,
      question:
        "How can the ILS 1 FAULT be restored from being a CANCELLED CAUTION?",
      options: [
        "By resetting the appropriate circuit breaker.",
        "By pressing and holding any CLR key for more than 3 seconds.",
        "By pressing the EMER CAN pushbuttton for more than 3 seconds.",
        "By pressing and holding the RCL key for more than 3 seconds.",
      ],
      answer: 3,
    },
    {
      id: 29,
      question:
        ": VLS is the lowest speed that the autoflight system (autopilot or A/THR) will fly the aircraft. This is a dynamic speed corresponding to an Angle Of Attack (AOA).",
      options: [
        "VLS will change with wing configuration change.",
        "With speedbrake extension, VLS will increase",
        "Above FL200, VLS will provide a 0.2g buffet margin",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 30,
      question:
        "The Speed Trend Arrow is a dynamic information displaying the speed to which the aircraft will be in _____.",
      options: ["5 seconds.", "8 seconds", "10 seconds", "13 seconds."],
      answer: 2,
    },
    {
      id: 31,
      question:
        "Of the three types of EIS displays, which one has the lowest priority?",
      options: ["The ND", "The PFD", "The SD"],
      answer: 0,
    },
    {
      id: 32,
      question:
        "As you approach a selected altitude, when will the yellow altitude window start flashing?",
      options: [
        "As you approach within 750 ft of FCU selected altitude and stop when it is within 250 ft.",
        "As you approach within 1000 ft of FCU selected altitude and stop when it is within 150 ft.",
        "As you approach within 500 ft of FCU selected altitude and stop when it is within 150 ft.",
        "As you approach within 900 ft of FCU selected altitude and stop when it is within 200 ft.",
      ],
      answer: 0,
    },
    {
      id: 33,
      question:
        "The Flight Path vector (FPV) represents the lateral and vertical trajectory of the aircraft with respect to the ground. On the lateral scale, it indicates the aircraft's track. On the vertical scale, it indicates the aircraft's flight path angle",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 34,
      question:
        "When does the Side Stick Order indicator display?",
      options: [
        "After first engine start and disappears when passing 400 feet RA",
        "After first engine start and disappears after rotation",
        "After second engine start and disappears when passing 400 feet RA",
      ],
      answer: 1,
    },
    {
      id: 35,
      question: "When is the 'Green Dot' displayed?",
      options: [
        "Only when flap handle is the zero position.",
        "Only when flap handle is the zero position, above FL80",
        "Only when flap handle is the zero position, below FL80",
        "Only when flap handle is the zero position, below FL85",
      ],
      answer: 0,
    },
    {
      id: 36,
      question:
        "The green 'S' of the speedtape is the Minimum Slat Retraction Speed. It is only displayed when the flap handle position is in position 1",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 37,
      question:
        "Is the Side Slip indicator always yellow?",
      options: [
        "Yes.",
        "No, it turns blue when it becomes a beta target (displaying optimum side slip for a given configuration)",
        "No, it turns orange when it becomes a beta target .",
      ],
      answer: 1,
    },
    {
      id: 38,
      question: "When will the Flight Director bars flash?",
      options: [
        "When a reversion occurs.",
        "When loss of LOC or G/S signal in LAND mode.",
        "All of the above.",
      ],
      answer: 2,
    },
    {
      id: 39,
      question:
        "The Flight Director bars are out of view when Bank angle exceeds 67°.",
      options: ["True", "False."],
      answer: 1,
    },
    {
      id: 40,
      question:
        "The Glide slope index will flash continuously when the deviation exceeds ______ above ______,",
      options: [
        "1/2 dot below 120 feet RA",
        "1 dot above 100 feet RA",
        "1 dot above 60 ft RA",
        "1/2 dot below 100 feet RA.",
      ],
      answer: 1,
    },
    {
      id: 41,
      question:
        "When will the PFD Heading tape revert to TRUE heading?",
      options: [
        "North of 73° North or South of 60° South",
        "South of 73° North or North of 60° South.",
        "North of 80° North or South of 73°South",
        "North of 78° North or South of 78°South",
      ],
      answer: 0,
    },
    {
      id: 42,
      question:
        "If the FPV (Flight Path Vector) symbol is right of center, where is the wind coming from?",
      options: ["Right.", "Left.", "It depends of the Track followed"],
      answer: 1,
    },
    {
      id: 43,
      question:
        "If the FPV is above the horizon line, what is the aircraft actually doing?",
      options: ["Descending.", "Maintaining FL.", "Climbing.", "Cannot say."],
      answer: 2,
    },
    {
      id: 44,
      question:
        "Both LOC and glideslope will flash if, after capture, the signal is lost.",
      options: ["True.", "False."],
      answer: 0,
    },
    {
      id: 45,
      question:
        "The lower end of a red and black strip along the speed scale defines the VMAX speed.",
      options: [
        "It is the lowest of the following VMO (or MMO), VLE, VFE",
        "It is the speed corresponding to the stall warning (VSW)",
        "It represents the speed corresponding to the angle of attack at which alpha protection becomes active.",
      ],
      answer: 0,
    },
    {
      id: 46,
      question:
        "The SD displays the Gross Weight (GW) in green as soon as the second engine is started.",
      options: ["True.", "False."],
      answer: 1,
    },
    {
      id: 47,
      question:
        ": In case of PFDU failure, the PFD image is transferred to the NDU:",
      options: [
        "Manually",
        "Automatically",
        "Either manually or automatically",
        "The PFD image cannot be displayed on the ND.",
      ],
      answer: 1,
    },
    {
      id: 48,
      question: "What is the basic role of the DMCs:",
      options: [
        "They compute and elaborate displays",
        "Generation of audio warnings",
        "Generation of amber warnings",
        "Generation of synthetic voice messages",
      ],
      answer: 0,
    },
    {
      id: 49,
      question:
        "Do the Check ATT. Messages appear on both PFDs at the same time?",
      options: [
        "Yes",
        "No",
        "Message only appears on the EWD",
        "Message only appears on ECAM",
      ],
      answer: 0,
    },
    {
      id: 50,
      question:
        "FACs calculate speed trend and VLS. The extremities of the trend vector and V1s segment indicate respectively; speed value at the next 10 seconds, and 1.23 Vs 1 g with present configuration. Is this correct?",
      options: [
        "Yes (for both cases)",
        "No (for both cases)",
        "No because VLS is not 1.23 Vs 1g",
        "No because the tip of the speed arrow is not the speed in 10 seconds time",
      ],
      answer: 0,
    },
    {
      id: 51,
      question:
        "With radar selected on, what can you read on ND about antenna setting?",
      options: [
        "Tilt angle",
        "Tilt angle and gain mode",
        "Roll angle and tilt angle",
        "Nothing",
      ],
      answer: 1,
    },
  ],
};