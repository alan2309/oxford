import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - INDICATING & RECORDING - 02",
  questions: [
    {
      id: 1,
      question:
        "The Flight Warning Computers (FWCs) acquire data from sensors or systems to",
      options: [
        "All are correct",
        "Generate alert messages, memos, aural alerts, red warnings and synthetic voice messages",
        "Generate Amber cautions through SDACs",
        "Generate radio altitude call-outs, DH call-outs",
      ],
      answer: 0,
    },
    {
      id: 2,
      question: "How many FWC are installed",
      options: ["Two", "One", "Three"],
      answer: 0,
    },
    {
      id: 3,
      question: "In case of Dual FWC Fault",
      options: [
        "Both are correct",
        "ECAM Cautions & Warnings, Master Caution & Warning lights are lost",
        "ECAM System pages are still available",
      ],
      answer: 0,
    },
    {
      id: 4,
      question:
        "In case of a double FWC failure master caution light, master warning light, aural warnings and ECAM cautions and warnings are lost",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 5,
      question: "In case of FWC1 fault:",
      options: [
        "Both are correct",
        "A message 'FWC fault' appears on the upper ECAM",
        "ECAM operation is not affected because there are 2 identical FWCs",
      ],
      answer: 0,
    },
    {
      id: 6,
      question: "How many SDACs are there?",
      options: ["Two", "One", "Three"],
      answer: 0,
    },
    {
      id: 7,
      question:
        "What is the function of the System Data Acquisition Concentrators (SDACs)?",
      options: [
        "To supply information to the FWCs for warning calculations and data to the DMCs to generate displays of system pages",
        "To generate all visual and aural warnings",
        "To generate displays of system pages to be sent to the system display unit",
      ],
      answer: 0,
    },
    {
      id: 8,
      question: "In case of single SDAC Fault",
      options: [
        "Both are correct",
        "It is a crew awareness fault",
        "ECAM may display some symbols / parameters in amber without failures",
      ],
      answer: 0,
    },
    {
      id: 9,
      question: "Mark the correct option :",
      options: [
        "In case of Dual FWC failures, all MC / MW / ECAM warnings and Cautions are lost.",
        "In case of Dual SDAC, only amber cautions are lost",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 10,
      question: "Aural alerts and voice messages are transmitted:",
      options: [
        "Through the loudspeakers even if the speakers are switched off.",
        "Only through the pilot's headsets",
        "Through the loudspeakers only if the speakers are switched on",
      ],
      answer: 0,
    },
    {
      id: 11,
      question: "How many DMC's are there?",
      options: ["3", "1", "2", "4"],
      answer: 0,
    },
    {
      id: 12,
      question:
        "The three Display Management Computers (DMCS) acquire and process all input from airplane sensors and computers to generate the display images",
      options: ["True", "False", "four DMC", "two DMC"],
      answer: 0,
    },
    {
      id: 13,
      question: "What is the basic role of the DMCs",
      options: [
        "They compute and elaborate displays {drive displays}",
        "Generation of audio warnings",
        "Generation of amber warnings",
        "Generation of synthetic voice messages",
      ],
      answer: 0,
    },
    {
      id: 14,
      question:
        "After a single DMC failure, how could a crew member recover the display units?",
      options: [
        "Rotate the EIS DMC switch on the switching panel to replace the failed DMC with DMC #3",
        "It is done automatically",
        "Once a DMC has failed, the information is unrecoverable",
      ],
      answer: 0,
    },
    {
      id: 15,
      question: "If DMC1 fails",
      options: [
        "INVALID DATA message is displayed on Capt PFD, ND",
        "DMC3 starts supplying the data and failure is restored automatically",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 16,
      question:
        "In case of DMC Failure, \"INVALID DATA\" message is displayed on the related DUs.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 17,
      question: "Which one of the following statements is true?",
      options: [
        "3 DMCs generate the images displayed on CRTs{DUs}",
        "3 Display Management Computers (DMCs) generate the alert messages and the red warnings.",
        "3 DMCs are used to collect Aircraft data sensors information.",
      ],
      answer: 0,
    },
    {
      id: 18,
      question: "When should you term DU as a failure?",
      options: [
        "both b & c",
        "When you see a blank screen with letter 'F' in amber or \"INVALID DISPLAY UNIT\" message in amber.",
        "When a display is distorted",
      ],
      answer: 0,
    },
    {
      id: 19,
      question:
        "If the PFD display fails or is switched off, the PFD automatically replaces the ND display unit",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 20,
      question:
        "If the upper ECAM display fails or is switched off, the engine/warning page automatically replaces the system/status page on the lower ECAM display unit",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 21,
      question:
        "If the UPPER ECAM DU fails, what will be displayed on the lower unit?",
      options: [
        "Engines and Warning page (E/WD)",
        "System display page",
        "Status page",
      ],
      answer: 0,
    },
    {
      id: 22,
      question:
        "By turning the UPPER DISPLAY knob to OFF, the E/WD appears on the lower display unit.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 23,
      question:
        "If the lower ECAM DU fails, is there a way to retrieve that information?",
      options: [
        "Both are correct",
        "By pressing and holding the related systems page push button on the ECAM control panel, the page will be displayed on the UPPER ECAM",
        "By rotating the ECAM/ND XFR switch on the switching panel, the lower ECAM page will be transferred to either the Captain or FO's ND",
      ],
      answer: 0,
    },
    {
      id: 24,
      question:
        "The upper ECAM Display Unit (DU) has failed. You want to see the ELECT page. How can you see it?",
      options: [
        "You have to press & hold ELECT P/B on ECP and E/WD will show ELECT page for a maximum of 3 min",
        "You have to press and hold the DOOR key on the ECP.",
        "You have to switch the EIS DMC to CAPT3",
        "You have to press and hold the RCL key on the ECP",
      ],
      answer: 0,
    },
    {
      id: 25,
      question:
        "Both ECAM screens have failed. Is it possible to get E/WD indications?",
      options: [
        "Yes, to get E/WD information, it must be manually transferred to one of the NDs",
        "Yes, the E/WD is automatically transferred to one of the NDs",
        "No. The E/WD is lost until the aircraft can be repaired",
        "Yes. E/WD information is automatically transferred to the the F/O's PFD in the event of an ECAM warning",
      ],
      answer: 0,
    },
    {
      id: 26,
      question:
        "What happens, when a discrepancy between the signal obtained by DMC (and sent to the DU) and the operational parameter displayed on the DU (in the form of feedback signal) is detected?",
      options: [
        "A feedback Message in the form of 'CHECK CAPT PFD /ND or CHECK F/O PFD ND or CHECK E/WD' message appears on the relevant DU.",
        "ECAM operation is not affected because there are 3 identical DMCs",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 27,
      question:
        "DISCREPANCY MESSAGE will come with ECAM where as FEEDBACK MESSAGE will not come with ECAM",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 28,
      question:
        "Do the \"Check ATT\" Messages appear on both PFDs at the same time?",
      options: [
        "Yes",
        "Message only appears on the wrong PFD.",
        "Message only appears on the correct PFD.",
      ],
      answer: 0,
    },
    {
      id: 29,
      question:
        "If there is a discrepancy of at least 5 degrees between the heading values, a message of \"CHECK HDG\" is displayed",
      options: [
        "Both are correct",
        "On both side PFDs and NDs displays",
        "If PLAN mode is selected, then the message will not be shown on the NDs",
      ],
      answer: 0,
    },
    {
      id: 30,
      question:
        "There are three types of failures: Independent, Primary and Secondary. What is an Independent failure?",
      options: [
        "A failure that affects an isolated system or item of equipment without degrading the performance of others in the aircraft",
        "A failure of a system or an item of equipment that costs the aircraft the use of other systems or items of equipment",
        "The loss of a system or item of equipment resulting from a Primary failure",
      ],
      answer: 0,
    },
    {
      id: 31,
      question: "What is a Primary Failure?",
      options: [
        "A failure of a system or an item of equipment that costs the aircraft the use of other systems or items of equipment",
        "The loss of a system or item of equipment resulting from a Primary failure.",
        "A failure that affects an isolated system or item of equipment without degrading the performance of others in the aircraft.",
      ],
      answer: 0,
    },
    {
      id: 32,
      question: "What is a Secondary Failure?",
      options: [
        "A failure that affects an isolated system or item of equipment without degrading the performance of others in the aircraft",
        "A failure of a system or an item of equipment that costs the aircraft the use of other systems or items of equipment",
        "The loss of a system or item of equipment resulting from a Primary failure.",
      ],
      answer: 2,
    },
    {
      id: 33,
      question:
        "In the case of ELECT EMER CONFIG, secondary failures are inhibited on E/WD.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 34,
      question:
        "With the help of EMER CANC p/b, pilot can cancel any audio indication.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 35,
      question:
        "With the help of MASTER WARN p/b, any audio can be cancelled except for OVERSPEED or L/G NOT DOWN",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 36,
      question:
        "SELCAL CONTINUOUS BUZZER can even be cancelled by MASTER CAUTION p/b.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 37,
      question:
        "Some action lines do not disappear from the E/WD even after the flight crew performs the necessary actions",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 38,
      question: "When is T.O. INHIBIT active?",
      options: [
        "From 80 kts till 1500 feet AGL",
        "From 80 kts till gear up",
        "From T/O POWER application till 1500 ft AGL.",
        "From Lift-off till 1500 feet AGL",
      ],
      answer: 2,
    },
    {
      id: 39,
      question:
        "Even if a failure message is inhibited, pilot can recall it by pressing",
      options: ["RCL", "CLR", "ALL"],
      answer: 0,
    },
    {
      id: 40,
      question:
        "Feedback messages take priority over load factor indication",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 41,
      question: "In case of single ECAM display",
      options: [
        "All are correct",
        "If an ECAM warning / caution is triggered, the relevant system page is not displayed automatically nor its system page p/b lights up",
        "If an advisory condition arises, the relevant system page is not displayed automatically but its system page p/b light pulses",
        "To see the system page, pilot has to push and hold p/b for upto 3min.",
      ],
      answer: 0,
    },
    {
      id: 42,
      question:
        "CLR p/b remains lighted as long as E/WD is displaying a",
      options: [
        "Both are correct",
        "Warning or caution",
        "Status page",
      ],
      answer: 0,
    },
    {
      id: 43,
      question:
        "A particular failure caution message is inhibited during the flight phases 3,4,5,7 and 8. What do you understand by this?",
      options: [
        "If the failure occurs during these phases, the ECAM caution is inhibited",
        "This failure will not occur during these phases",
        "The ECAM caution appears only if the failure occur during these phases",
        "As in (a) and the local caution will also be inhibited.",
      ],
      answer: 0,
    },
    {
      id: 44,
      question:
        "The speed trend arrow on the PFD airspeed scale indicates the speed value that will be attained in seconds if the acceleration remains constant",
      options: ["10", "5", "8", "15"],
      answer: 0,
    },
    {
      id: 45,
      question: "Speed Trend Arrow is still available if FACs fail",
      options: ["False", "True"],
      answer: 0,
    },
    {
      id: 46,
      question: "If both FACs fail",
      options: [
        "SPD LIM red flag will appear at the bottom of the both PFD speed scale",
        "FACs INOP will appear on both PFDs in amber color",
        "Both of the above are correct",
      ],
      answer: 0,
    },
    {
      id: 47,
      question: "Mach No. will be visible when it is >0.5",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 48,
      question:
        "The maximum speed to select next higher flap setting is indicated by two amber dashes",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 49,
      question:
        "VFE NEXT appears when a/c altitude is below 20000'",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 50,
      question:
        "Speed protection symbol is indicated by two green dashes and indicates the speed at which overspeed protection becomes active {VMO + 6 Kts or MMO + 0.01}",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 51,
      question:
        "ECON SPEED Range thick lines are visible only during descent.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 52,
      question: "VSW is the speed corresponding to the stall warning and",
      options: [
        "Both of the above are correct.",
        "VSW information is inhibited from touchdown until5 sec after lift-off.",
        "VSW is displayed only if a/c is under pitch alternate or direct law",
      ],
      answer: 0,
    },
    {
      id: 53,
      question: "When a/c is in normal law",
      options: [
        "Both of the above are correct.",
        "VSW is not indicated",
        "VLS , alpha- protection speed and alpha Max speed are shown",
      ],
      answer: 0,
    },
    {
      id: 54,
      question:
        "The lower end of a red and black strip along the speed scale defines the VMAX speed and",
      options: [
        "It is the lowest of the following VMO (or MMO), VLE, VFE",
        "It is the speed corresponding to the stall warning (VSW)",
        "It represents the speed corresponding to the angle of attack at which alpha protection becomes active.",
      ],
      answer: 0,
    },
    {
      id: 55,
      question: "When is the 'Green Dot' displayed?",
      options: [
        "Only when flap handle is in the zero position",
        "Only when flap handle is in the zero position, above FL80",
        "Only when flap handle is in the zero position, below FL80",
      ],
      answer: 0,
    },
    {
      id: 56,
      question: "What does Green Dot represent?",
      options: [
        "Maneuvering speed in clean configuration when speed is managed and it shows the speed corresponding to the best lift-to-drag ratio",
        "The next flap extend (VFE) max speed",
        "Maneuvering speed in clean configuration",
      ],
      answer: 0,
    },
    {
      id: 57,
      question:
        "The green 'F' symbol on speed tape is the minimum flap retraction speed. It is only displayed when the flap handle is in position 3 or 2.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 58,
      question:
        "The green 'S' of the speed tape is the Minimum Slat Retraction Speed. It is only displayed when the flap handle position is in position 1",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 59,
      question:
        "Altitude window has changed to Amber on PFD. What do mean by this?",
      options: [
        "A/C has deviated from FCU selected flight level",
        "FMGS wants you to change the altitude in ALT window on FCU",
        "Both of the above",
      ],
      answer: 0,
    },
    {
      id: 60,
      question:
        "If a/c goes below MDA, altitude window will become amber",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 61,
      question:
        "What is the meaning of \"9000\" in blue at the top of the altitude scale?",
      options: [
        "It marks the FCU selected altitude",
        "It marks the airfield elevation",
        "It marks the transition altitude",
        "It marks the decision height",
      ],
      answer: 0,
    },
    {
      id: 62,
      question:
        "As today's flight is very light and you are climbing very fast and as such you are above profile. VDEV indication {yoyo} will indicate how much you have deviated from your profile",
      options: ["False", "True"],
      answer: 0,
    },
    {
      id: 63,
      question: "What happens when RoC or RoD is exceeded?",
      options: [
        "Both of the above are correct.",
        "The analog and digital indications become amber if V/S is > 6000fpm in climb or descent",
        "If high RoD near ground below 2500 RA, AND v/s >2000fpm, the analog and digital indications become amber.",
      ],
      answer: 0,
    },
    {
      id: 64,
      question:
        "You are climbing and you observe that the window around the numerical value of V/S has turned suddenly amber. What do you think?",
      options: [
        "Inertial data is not available and information is from baro info",
        "A/C climb rate is high and that is why the window has turned amber.",
        "Both are correct",
      ],
      answer: 0,
    },
    {
      id: 65,
      question:
        "When will the PFD Heading tape revert to TRUE heading? {even \"TRUE\" appears at the top of compass rose when true HDG is being displayed}",
      options: [
        "North of 73° North or South of 60° South",
        "South of 73° North or North of 60° South",
        "North of 80° North or South of 73°South",
        "North of 78° North or South of 78°South",
      ],
      answer: 0,
    },
    {
      id: 66,
      question: "Tail strike pitch limiter indicator",
      options: [
        "During landing, this indication disappears when there is no longer a risk of tailstrike",
        "It is visible during take-off and landing and indicates the max pitch attitude to avoid the tailstrike risk",
        "Both of the above are correct",
      ],
      answer: 0,
    },
    {
      id: 67,
      question:
        "In which of the following failures, the characteristic speeds on the PFD are lost?",
      options: [
        "Both are correct",
        "If both FACs are inoperative",
        "Dual flap / slat channel failure of SFCC",
      ],
      answer: 0,
    },
    {
      id: 68,
      question:
        "CHECK ALT flag appears if the disagreement between the two PFDs altitude indications is greater than 250 ft when QNH is selected {or 500 feet when STD is selected}",
      options: [
        "Both are correct",
        "This is associated with ECAM caution",
        "The caution and the flag disappear when pilot's and co-pilot's BARO Ref disagree",
      ],
      answer: 0,
    },
    {
      id: 69,
      question: "Rose ILS MODE on ND show ILS details.",
      options: ["360", "090", "180"],
      answer: 0,
    },
    {
      id: 70,
      question:
        "When does ILS APP message appear {in green} at the top of ND?",
      options: [
        "Both of the above",
        "When you select ILS approach on MCDU and when phase of flight is DES, APP or GA.",
        "Even if phase of flight is CRZ, if you select ILS App on MCDU, this message will appear on ND provided distance to destination is <250 NM along track",
      ],
      answer: 0,
    },
    {
      id: 71,
      question:
        "Estimated time of arrival shown on the ND at TO WAYPOINT is based on",
      options: [
        "Current Ground Speed",
        "Current IAS",
        "Avg value of both the above",
      ],
      answer: 0,
    },
    {
      id: 72,
      question:
        "When a/c overflies Outer Marker, the station symbol {diamond} flashes",
      options: ["Blue", "Amber", "White"],
      answer: 0,
    },
    {
      id: 73,
      question:
        "NDB Navigation station is represented on ND in the form of",
      options: ["Triangle", "Cross sign", "Plus sign"],
      answer: 0,
    },
    {
      id: 74,
      question:
        "VOR Navigation station is represented on ND in the form of",
      options: ["Plus sign", "Triangle", "Cross sign"],
      answer: 0,
    },
    {
      id: 75,
      question:
        "Weather will be displayed on ND, if it is not in PLAN mode",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 76,
      question: "PAC Alert on ND for Wx radar is not available",
      options: [
        "Both are correct",
        "If Gain Selector is not at CAL position",
        "ND is displaying MAN GAIN at bottom right cornor",
        "Both are wrong",
      ],
      answer: 0,
    },
    {
      id: 77,
      question:
        "What is the meaning of \"NO AUTO TILT\" message on ND?",
      options: [
        "It means Multiscan function is lost",
        "It means Multiscan switch is in MAN position",
        "Both of the above",
      ],
      answer: 0,
    },
    {
      id: 78,
      question:
        "NAVAIDS are shown on ND in different symbols. The color of symbol will be different when NAVAID is tuned automatically by FMGC and manually through the MCDU",
      options: ["False", "True"],
      answer: 0,
    },
    {
      id: 79,
      question:
        "'F' symbol is not displayed if Take-Off is performed in 1+F config",
      options: ["True", "False"],
      answer: 0,
    },
  ],
};