import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - AUTOFLIGHT - 02",
  questions: [
    {
      id: 1,
      question: "AUTOLAND red warning flashes when:",
      options: [
        "Both AP in LAND mode and RA goes below 200 feet and a/c gets too far off the beam {LOC or GLIDE}{1/4 dot for LOC above 15 ft and 1 dot for G/S above 100'RA} In addition both LOC & GLIDE scales flash on the PFD.",
        "Both AP in LAND mode and RA <200 ft and both AP fail or both localizer xmitter / receiver fail or both G/S xmitter / receiver fail,",
        "Both AP in LAND mode and RA <200 ft and difference between both RA indications > 15 feet.",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 2,
      question:
        "If you have depressed the EXPED push button and want to cancel this function, how could this be accomplished?",
      options: [
        "Push the EXPED push button again.",
        "Pull any of the altitude, vertical speed, or speed knob.",
        "Retard the thrust levers to IDLE.",
      ],
      answer: 1,
    },
    {
      id: 3,
      question: "Mark the correct statement:",
      options: [
        "When you press EXPD when in climb, target speed is Green Dot and is maintained by A/THR.",
        "When you press EXPD when in Descend, target speed is 340 / 0.8 Mach and is maintained by A/THR.",
        "When EXPD is engaged, the system disregards SPD CSTR, ALT CSTR and SPD LIM.",
        "All of the above are correct.",
      ],
      answer: 3,
    },
    {
      id: 4,
      question: "Mark the correct statement:",
      options: [
        "When a localizer is available, you will see Yaw Bar on PFDs up to 30 ft RA, on takeoff (in RWY mode) and during landing (in FLARE and ROLL OUT mode.).",
        "On landing, in ROLLOUT mode, with AP engaged; the FD bars remain in view at all times.",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 5,
      question: "In Cruise, you get AUTO FLT FAC 1 + 2 FAULT. Mark the correct statement:",
      options: [
        "PFD characteristic speeds are lost along with Yaw Damper, Rudder Travel System and Rudder Trim control.",
        "F/CTL Normal Laws are lost and aircraft enters in ALTN LAW. All protections are lost.",
        "a –Floor protection is available even with this failure.",
        "All the above are correct.",
      ],
      answer: 0,
    },
    {
      id: 6,
      question: "If both the RUDDER TRAVEL LIMITATION functions fail in flight",
      options: [
        "Full rudder travel is available irrespective of the speed.",
        "Rudder travel is limited to the value corresponding to the speed at which the failure has taken place for the rest of the flight",
        "Rudder travel is limited to the value corresponding to the speed at which the failure has taken place till the slats are extended and thereafter full authority is available.",
        "This has no effect whatsoever.",
      ],
      answer: 2,
    },
    {
      id: 7,
      question: "Yaw bar is displayed on PFD in the following mode",
      options: ["RWY mode only", "Roll out mode only", "RWY TRK mode", "RWY or Roll out mode"],
      answer: 3,
    },
    {
      id: 8,
      question: "How does the FMGS derive Vapp?",
      options: [
        "Vapp=Vls+1/3 of the TWR Headwind component.",
        "Vapp=Vls+5",
        "Whichever is higher of Vls+1/3 of the TWR Headwind component and Vapp=Vls+5",
        "Vapp=Vls+10+1/3 surface headwind component",
      ],
      answer: 2,
    },
    {
      id: 9,
      question:
        "For Take off, thrust levers are pushed to TOGA / FLEX gate with FD on and V2 defined on PERF TAKE OFF page.",
      options: [
        "A/THR engages automatically and A/THR push button illuminates on FCU ATHR engages in TOGA / FLEX if TO in flex.",
        "SRS mode is engaged",
        "All the above are correct",
      ],
      answer: 1,
    },
    {
      id: 10,
      question: "\"TOGA LK\" surrounded by a flashing amber box on FMA, indicates that:",
      options: [
        "a -floor conditions are persisting and thrust commanded is TO/GA.",
        "Aircraft has left a -floor conditions and TOGA thrust is locked.",
        "Auto-thrust is disconnected as aircraft has left a -floor conditions.",
      ],
      answer: 1,
    },
    {
      id: 11,
      question:
        "THR IDLE / DES / NAV modes were engaged on FMA in descent. If you select HDG, what happens?",
      options: [
        "NAV mode will change to HDG and FMA will show THR IDLE / OP DES / HDG.",
        "NAV mode will change to HDG and FMA will show SPEED / VS / HDG.",
        "NAV mode will change to HDG and FMA will show THR IDLE / DES / HDG.",
      ],
      answer: 1,
    },
    {
      id: 12,
      question:
        "You are climbing with THR CLB / CLB / NAV engaged on FMA. ATC advises you to turn right on a heading of 110. Your actions to select HDG to 110 will result in:",
      options: [
        "NAV changing to HDG and therefore managed CLB will change to OP CLB.",
        "NAV changing to HDG and therefore managed CLB will change to V/S of current a/c vert. speed.",
        "As in {A} above but THR CLB will remain same.",
        "As in {B} above but THR CLB will change to SPEED.",
      ],
      answer: 2,
    },
    {
      id: 13,
      question:
        "In a managed DES mode, if aircraft is above profile, what is A/THR mode and what does A/P pitch channel control?",
      options: [
        "THR IDLE and speed {IAS} by AP Pitch channel",
        "SPEED and rate of descent by AP Pitch channel",
        "THR IDLE and rate of descent by AP Pitch channel",
        "SPEED and speed {IAS} by AP pitch channel",
      ],
      answer: 0,
    },
    {
      id: 14,
      question: "In a managed DES mode, if aircraft is above profile, what is the A/THR mode?",
      options: ["THR IDLE", "SPEED"],
      answer: 0,
    },
    {
      id: 15,
      question:
        "You are descending with THR IDLE / DES / NAV modes engaged. ATC advises you to turn right on a heading of 110. Your actions to select HDG to 110 will result in:",
      options: [
        "NAV changing to HDG and therefore managed DES will change to V/S of current a/c vertical speed. THR IDLE will change to SPEED mode.",
        "NAV changing to HDG and therefore managed DES will change to V/S of current a/c vertical speed. THR IDLE remain same.",
        "NAV will change to HDG and DES will change to OP DES. However, THR IDLE will remain same.",
      ],
      answer: 0,
    },
    {
      id: 16,
      question: "Mark the correct statement:",
      options: [
        "You can descend with OP DES and HDG selected.",
        "When you are descending in managed DES mode and if a/c is below profile, FMA will show THR IDLE / DES / NAV",
        "When you are descending in managed DES mode and if a/c is above profile, FMA will show SPEED / DES/ NAV",
      ],
      answer: 0,
    },
    {
      id: 17,
      question: "Mark the correct statement:",
      options: [
        "You can descend with OP DES and HDG selected.",
        "When you are descending in managed DES mode and if a/c is below profile, FMA will show THR IDLE / DES / NAV",
        "When you are descending in managed DES mode and if a/c is above profile, FMA will show SPEED / DES/ NAV",
        "All of the above are correct.",
      ],
      answer: 0,
    },
    {
      id: 18,
      question:
        "In a managed DES mode, if aircraft is below profile, what is A/THR mode and what does A/P pitch channel control?",
      options: [
        "THR IDLE and speed {IAS} by AP Pitch channel",
        "SPEED and rate of descent by AP Pitch channel",
        "THR IDLE and rate of descent by AP Pitch channel",
        "SPEED and speed {IAS} by AP pitch channel",
      ],
      answer: 1,
    },
    {
      id: 19,
      question: "In a managed DES mode, if aircraft is below profile, what is A/THR mode?",
      options: ["THR IDLE", "SPEED"],
      answer: 1,
    },
    {
      id: 20,
      question: "What does pushing the APPR push button do?",
      options: [
        "Arms managed navigation.",
        "Arms the Flight Guidance system to capture a localizer and glide slope if the information has been entered into the MCDU.",
        "Allows the aircraft to slow to green dot speed.",
      ],
      answer: 1,
    },
    {
      id: 21,
      question: "The LOC mode disengages when:",
      options: [
        "Another lateral mode is engaged.",
        "The pilot presses the LOC pushbutton again (engaging the HDG/TRK mode on the current HDG/TRK).",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 22,
      question:
        "Insertion or deletion of a holding pattern or change of the SPD target during descent modifies the DES profile.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 23,
      question: "GO AROUND mode is engaged",
      options: [
        "By selecting thrust levers in the TO / GA position",
        "Inflight provided flaps / slats handle is at zero",
        "Both (a) and (b) are correct.",
        "As in (a) and inflight when flaps / slats handle is not at zero.",
      ],
      answer: 3,
    },
    {
      id: 24,
      question: "The flight Guidance part of FMGS provides :",
      options: [
        "AP commands to automatically control Pitch, Roll and Yaw",
        "Auto Thrust commands to automatically control Thrust",
        "Flight Director commands for pilot to control pitch, roll and yaw",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 25,
      question: "Flight Augmentation (FAC) part of the FMGS provides:",
      options: [
        "Maneuvering speed computation",
        "Flight envelope computation",
        "Low energy warning and wind shear detection function",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 26,
      question: "The FMGS data base contains:",
      options: ["Performance information.", "Navigation information.", "Both are correct."],
      answer: 2,
    },
    {
      id: 27,
      question: "An FMGS message which requires immediate attention is displayed in:",
      options: ["Red", "Amber", "Magenta"],
      answer: 1,
    },
    {
      id: 28,
      question: "Normal mode of operation for FMGS is",
      options: ["Dual Mode", "Single Mode", "Independent Mode"],
      answer: 0,
    },
    {
      id: 29,
      question: "When both FMGCs are working, one will be Master and other will be Slave.",
      options: [
        "So that some data in the slave FMGC comes from the master.",
        "All data inserted into any MCDU is transferred to both FMGCs and to all peripherals",
        "Both are correct",
      ],
      answer: 2,
    },
    {
      id: 30,
      question: "If no AP is engaged, and",
      options: [
        "The FD1 pb is on, and FD2 pb off then FMGC1 is master",
        "The FD1 pb is on, and FD2 pb on then FMGC1 is master",
        "The FD1 pb is off, and FD2 pb on then FMGC2 is master.",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 31,
      question: "Select the correct statements:",
      options: [
        "If no AP/FD is engaged, A/THR is controlled by FMGC1.",
        "If two APs are engaged, FMGC1 is master.",
        "If one autopilot (AP) is engaged, the related FMGC is master:",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 32,
      question: "On an auto-land approach, with both autopilots on, which FMGC is master?",
      options: ["FMGC 1", "FMGC 2", "Both"],
      answer: 0,
    },
    {
      id: 33,
      question: "When one FMGC fails",
      options: [
        "The system works in SINGLE mode",
        "The system works in INDEPENDENT mode",
        "OPP FMGC IN PROGRESS message appears on MCDU",
        "Both (a) and (c) are correct",
      ],
      answer: 3,
    },
    {
      id: 34,
      question: "When FMGC1 fails,",
      options: [
        "On ND1, Map will disappear and a message will be displayed \"MAP NOT AVAIL\".",
        "On both NDs Maps will disappear and \"MAP NOT AVAIL\" is displayed on both NDs.",
        "The message will disappear when ND1 range and mode are set as per ND2.",
        "Both {A} & {C} are correct.",
      ],
      answer: 3,
    },
    {
      id: 35,
      question: "In flight with dual FMGCs failure, could we still navigate and complete our flight?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 36,
      question: "FMGC 1 is not working. To enter data into the FMGC, which MCDU would you use?",
      options: ["MCDU 1.", "MCDU 2.", "Either MCDU 1 or MCDU 2."],
      answer: 2,
    },
    {
      id: 37,
      question:
        "When a double entry is needed on the MCDU (e.g. wind direction/speed: 270/110) the separating slash must be used. The trailing entry of a pair must be preceded by a slash if it is entered alone.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 38,
      question: "An amber box on the MCDU screen indicates:",
      options: [
        "An optional data entry.",
        "A mandatory data entry.",
        "A compulsory reporting point.",
        "The waypoint indicated will be overflown.",
      ],
      answer: 1,
    },
    {
      id: 39,
      question: "The FCU allows",
      options: [
        "Modification in flight plan.",
        "Selection of FG modes",
        "Selection of radio navigation frequencies",
        "IRS alignment.",
      ],
      answer: 1,
    },
    {
      id: 40,
      question: "What do the white round display on the FCU display mean?",
      options: [
        "Selected guidance has been engaged.",
        "Automatic guidance has been engaged.",
        "Managed guidance has been armed or engaged.",
        "There are no such lights on A320 FCU.",
      ],
      answer: 2,
    },
    {
      id: 41,
      question:
        "Will the aircraft capture and navigate via the ILS signals if the ILS push button on the FCU is not pushed?",
      options: ["Yes", "No"],
      answer: 0,
    },
    {
      id: 42,
      question: "When the altitude knob on the FCU is pulled:",
      options: [
        "The altitude is armed.",
        "The current altitude is canceled.",
        "OPEN CLIMB or DESCENT engages.",
        "All are correct",
      ],
      answer: 3,
    },
    {
      id: 43,
      question:
        "If the SPD/MACH knob on the FCU is not pulled within a predetermined time to engage selected speed:",
      options: [
        "The selection can be made at any time.",
        "The selection is lost and dashes are re-displayed.",
        "The selection is lost and the display goes blank.",
      ],
      answer: 1,
    },
    {
      id: 44,
      question: "What is the difference between -FD2 and 1FD- on the FMA?",
      options: [
        "1 inop, 2 engaged. 2 engaged, 1 off.",
        "1 off, 2 engaged. 1 engaged, 2 off.",
      ],
      answer: 1,
    },
    {
      id: 45,
      question: "Indications on FMA are:",
      options: [
        "1FD1 if both FDs engaged and FD2 fails.",
        "1FD2 if both FDs engaged and FD1 fails.",
        "2FD2 if both FDs engaged and FD2 fails.",
        "2FD1 if both FDs engaged and FD1fails.",
      ],
      answer: 0,
    },
    {
      id: 46,
      question: "What are the different types of flight guidance?",
      options: [
        "Slaved and managed.",
        "Automatic and manual.",
        "Managed and selected.",
        "Managed and manual.",
      ],
      answer: 2,
    },
    {
      id: 47,
      question: "What are the Autopilot functions?",
      options: [
        "Automatic landing and go around.",
        "Stabilization of the aircraft around its center of gravity.",
        "Acquisition and tracking of a flight path.",
        "All of the above.",
      ],
      answer: 3,
    },
    {
      id: 48,
      question:
        "If one AP pushbutton is ON with both FDs OFF, the A/P engages in HGD V/S or TRK FPA mode depending upon which mode is selected on FCU.",
      options: ["TRUE", "FALSE"],
      answer: 0,
    },
    {
      id: 49,
      question:
        "If one A/P pushbutton is set to ON with at least one FD already ON, the AP engages in the current active FD modes.",
      options: ["TRUE", "FALSE"],
      answer: 0,
    },
    {
      id: 50,
      question: "When one AP is engaged, the corresponding FCU pushbutton comes on and AP1 (2) is displayed on the FMA.",
      options: ["TRUE", "FALSE"],
      answer: 0,
    },
    {
      id: 51,
      question: "AP engagement increases the breakout force on the side stick.",
      options: [
        "TRUE as the side stick is difficult to move when AP is engaged.",
        "FALSE as the side stick can be moved freely even if AP is engaged.",
      ],
      answer: 0,
    },
    {
      id: 52,
      question: "With the autopilot engaged, either side-stick can be moved freely.",
      options: [
        "True",
        "False, moving either side stick will cause the autopilot(s) to disengage",
        "False, only the PNF's side stick will freely move.",
      ],
      answer: 1,
    },
    {
      id: 53,
      question: "Both autopilots can be engaged together and active in any phase of flight.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 54,
      question: "In normal law with all protections active, the AP will disconnect if",
      options: [
        "High speed protection is active",
        "AOA protection is active",
        "Bank angle is more than 45 deg",
        "All the above are correct.",
      ],
      answer: 3,
    },
    {
      id: 55,
      question: "In normal law with all protections active, the AP will disconnect if",
      options: [
        "If autopilot is engaged without FD?",
        "None of the above",
        "OP CLIMB and NAV modes are engaged",
        "EXP CLIMB and NAV modes are engaged",
      ],
      answer: 1,
    },
    {
      id: 56,
      question: "During non-precision approach with AP, when reaching MDA, the following will occur.",
      options: [
        "AP will disengage, FD remains engaged in FINAL / APP NAV",
        "AP will change its mode from FINAL / APP NAV to HDG V/S",
        "AP will disengage, FD reverts to HDG / V/S",
        "AP & FD both disengages.",
      ],
      answer: 1,
    },
    {
      id: 57,
      question: "With the aircraft in flight, AP engaged and A/THR active, the ATHR mode:",
      options: [
        "Can be chosen by the pilot on the FCU",
        "Can be chosen by the pilot on the MCDU",
        "Depends on AP lateral mode",
        "Depends on AP vertical mode",
      ],
      answer: 3,
    },
    {
      id: 58,
      question:
        "The Armed Vertical Modes are displayed on the Flight Mode Annunciator on the second line in:",
      options: ["Blue or magenta.", "Blue or green.", "White"],
      answer: 0,
    },
    {
      id: 59,
      question:
        "The Engaged Vertical Modes are displayed on the Flight Mode Annunciator on the first line in:",
      options: ["Green", "Green or Magenta", "Blue"],
      answer: 0,
    },
    {
      id: 60,
      question: "When the aircraft is in the Managed Guidance mode, it is:",
      options: [
        "Guided by the pilot selecting the specific flight modes and parameter target values on the FCU.",
        "Responding to pilot inputs of speed, altitude, and heading selected on the FCU.",
        "Following lateral, vertical and speed profiles as determined by the IRS'S.",
        "Following lateral, vertical and speed profiles as determined by the FMGS.",
      ],
      answer: 3,
    },
    {
      id: 61,
      question: "Managed guidance is engaged by:",
      options: [
        "Pulling on the desired FCU selector knob.",
        "Pushing on the desired FCU selector knob.",
        "Rotating 90° the desired FCU selector knob.lateral, vertical and speed profiles as determined by the IRS'S.",
      ],
      answer: 1,
    },
    {
      id: 62,
      question: "When can managed vertical navigation be engaged?",
      options: [
        "Only after managed speed has been engaged.",
        "At anytime regardless of the engagement status of lateral navigation or speed.",
        "Only after managed lateral navigation and managed speed have been engaged.",
        "Only after managed lateral navigation has been engaged.",
      ],
      answer: 3,
    },
    {
      id: 63,
      question: "When MANAGED GUIDANCE is working",
      options: [
        "FCU windows including ALT window are dashed",
        "FCU windows shows the values selected by FMGC",
        "FCU windows except ALT windows are dashed.",
        "As in (c) and white dots illuminate on FCU next to each window",
      ],
      answer: 3,
    },
    {
      id: 64,
      question: "The managed AP/FD lateral modes are",
      options: [
        "NAV, HDG, APPR, LOC, RWY, RWY TRK",
        "HDG, NAV, APPR, LOC, GA TRK",
        "HDG, NAV, GA, GA-TRK",
        "NAV, APPR, LOC, RWY, RWY, TRK, GA TRK",
      ],
      answer: 3,
    },
    {
      id: 65,
      question:
        "You have been cleared to intercept the localizer. You have pushed the LOC push button on the FCU. If all necessary data has been entered in the MCDU, can you now engage both autopilots?",
      options: [
        "No, the LOC must capture before both autopilots will engage.",
        "Yes",
        "No, the APPR pushbutton must be pushed.",
      ],
      answer: 2,
    },
    {
      id: 66,
      question: "What is the flow during cockpit preparation as regards to FMGS Initialization steps:",
      options: ["DIFS-RIPP", "DIF-RIPPS", "DFIS-RIPP"],
      answer: 0,
    },
    {
      id: 67,
      question: "Zero Fuel Weight is entered on:",
      options: ["INIT B page.", "Prog page.", "Perf page"],
      answer: 0,
    },
    {
      id: 68,
      question: "Selection of the correct takeoff runway on the FMGC prior to each flight is necessary because:",
      options: [
        "The FADEC needs it to know how much to reduce the thrust for takeoff.",
        "Selection of the correct runway insures proper pressurization.",
        "Selection of the correct runway permits the FMGC to update its position at takeoff",
      ],
      answer: 2,
    },
    {
      id: 69,
      question: "What is managed climb speed below 10,000 feet?",
      options: ["Green dot.", "210 knots.", "250 knots.", "Best rate of climb speed."],
      answer: 2,
    },
    {
      id: 70,
      question: "What is managed climb speed above 10,000 feet?",
      options: ["Green dot.", "250 knots.", "280 knots.", "Econ Climb Speed."],
      answer: 3,
    },
    {
      id: 71,
      question: "How can the present position of the aircraft be initialized?",
      options: [
        "Present position can be entered through the ADIRS CDU but is possible only for old a/c.",
        "Present position can be entered on the INIT page of the MCDU.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 72,
      question: "How does the FMGC compute radio position?",
      options: ["IRS only.", "IRS and VOR/DME.", "IRS, DME/DME.", "DME/DME and VOR/DME"],
      answer: 3,
    },
    {
      id: 73,
      question: "The takeoff bias is:",
      options: [
        "Replaced when a bias is computed based on radio position.",
        "Retained for the remainder of the flight.",
        "Blended out over the next 30 minutes.",
      ],
      answer: 0,
    },
    {
      id: 74,
      question: "If LOW ACCURACY message is displayed, are there any approach restrictions?",
      options: ["No", "Yes, ILS approach only.", "Yes, RNAV approaches are forbidden."],
      answer: 2,
    },
    {
      id: 75,
      question:
        "The FMGS updates the FM position via the use of GPS or radio navaids and it uses a priority rule for FM position update. What is the order of priority for determining FM position?",
      options: [
        "IRS-GPS, IRS-VOR/DME IRS-DME/DME, IRS only.",
        "IRS-GPS, IRS only, IRS-DME/DME, IRS-VOR/DME,",
        "IRS-GPS, IRS-DME/DME, IRS-VOR/DME, IRS only.",
      ],
      answer: 2,
    },
    {
      id: 76,
      question: "\"NAV ACCUR DOWNGRAD\" message appears,",
      options: [
        "When both FMGC detect NAV Accuracy change",
        "When any one of the FMGC detects NAV Accuracy change",
        "It depends upon type of RNP Operation.",
      ],
      answer: 1,
    },
    {
      id: 77,
      question: "Updating of FMGC position in flight is available from",
      options: ["POSN MONITOR page", "PROGRESS page", "INIT A page", "UPDATE page"],
      answer: 1,
    },
    {
      id: 78,
      question: "To determine the aircraft position, FMGC uses data from",
      options: [
        "DME, VOR or ILS systems",
        "Clocks and Ground speed computation",
        "Three ADIRS.",
        "Both (a) and (c) are correct.",
      ],
      answer: 3,
    },
    {
      id: 79,
      question:
        "The FMGS is certified for Required Navigation Performance RNP/RNAV operations. When GPS Primary mode is available, the minimum RNP's for approach have been demonstrated to be?",
      options: [
        "0.3 nm (0.31 nm in some aircraft) when AP or FD are used or AP and FD OFF.",
        "0.5 nm (0.51 nm in some aircraft) when AP or FD are used and 1.0 nm in manual control.",
        "nm (0.31 nm in some aircraft) when AP or FD are used.",
      ],
      answer: 0,
    },
    {
      id: 80,
      question: "All navaids are normally auto-tuned by:",
      options: ["The FMGC", "MCDU", "ADIRU"],
      answer: 0,
    },
    {
      id: 81,
      question: "In the event of FMGC1 failure, Nav tuning shall be",
      options: [
        "ILS 1 tuning by RMP1, ILS 2 auto tuned by FMGC2",
        "Only ILS 2 tuning available on RMP 2",
        "ILS 1 & 2 both available only by respective RMPs",
        "ILS 1 & 2 both auto tuned by FMGC 2",
      ],
      answer: 3,
    },
    {
      id: 82,
      question: "Radio Navigation Tuning has following purpose:",
      options: ["For Display", "For Position Computation.", "Both are correct"],
      answer: 2,
    },
    {
      id: 83,
      question: "In normal operation, the nav aids are tuned:",
      options: [
        "Manually through the Radio Management Panel.",
        "Manually through the RAD NAV page.",
        "Automatically through the Flight Management and Guidance System (FMGS)",
      ],
      answer: 2,
    },
    {
      id: 84,
      question: "A NAV Aid is deselected on SELECTED NAV AIDS page",
      options: [
        "The CLR action on deselected Nav Aid allows FMGC to use that Nav Aid again",
        "The deselection cannot be cleared until after landing",
        "The deselection is cleared when secondary data base is activated on aircraft status page.",
        "Both (a) and (c) are correct.",
      ],
      answer: 0,
    },
    {
      id: 85,
      question: "Mark the correct statements:",
      options: [
        "The RADIO NAV page and the ND show which NAVAID have been tuned for display.",
        "All NAVAIDS tuned on RAD NAV page are used for display purpose.",
        "NAVAIDS used for a/c position update are displayed on the SELECTED NAVAIDS page.",
        "All are correct.",
      ],
      answer: 3,
    },
    {
      id: 86,
      question: "Which of the following navaids can be auto-tuned for computation of the radio position?",
      options: [
        "ILS and ADF (when flight plan specifies NDB approaches).",
        "VOR and DME.",
        "Both are correct.",
      ],
      answer: 1,
    },
    {
      id: 87,
      question: "What is the preferred method of radio position updating for the FMGS?",
      options: ["VOR/DME", "ILS/DME", "DME/DME"],
      answer: 2,
    },
    {
      id: 88,
      question:
        "Name the factor which is used to correct predicted fuel flow if a/c performance differs from performance model stored in the FMGS Database?",
      options: ["IDLE FACTOR", "PERF FACTOR", "COST INDEX"],
      answer: 1,
    },
    {
      id: 89,
      question:
        "Name the factor which is dedicated to the FM Descent segment so as to adjust FM Descent predictions. If it is positive, it gives an earlier TOD. If it is negative, TOD is delayed and you will see steeper path.",
      options: ["IDLE FACTOR", "PERF FACTOR", "COST INDEX"],
      answer: 0,
    },
    {
      id: 90,
      question: "Cost Index = 999 corresponds to",
      options: [
        "Minimum fuel consumption (max range)",
        "Minimum time.",
        "Best ratio between the flight time cost and the fuel cost.",
        "LRC (Long Range Cruise)",
      ],
      answer: 1,
    },
    {
      id: 91,
      question: "Cost Index = 0 (zero) corresponds to",
      options: [
        "Minimum fuel consumption (max range)",
        "Minimum time.",
        "Best ratio between the flight time cost and the fuel cost.",
        "LRC (Long Range Cruise).",
      ],
      answer: 0,
    },
    {
      id: 92,
      question:
        "The energy circle is a green arc, centered on the aircraft's position and oriented towards the current track line. It is displayed on the NDs during descent, when HDG or TRK mode is selected.",
      options: ["True.", "False"],
      answer: 0,
    },
    {
      id: 93,
      question: "When can managed vertical navigation be engaged?",
      options: [
        "Only after managed speed has been engaged.",
        "At anytime regardless of the engagement status of lateral navigation or speed.",
        "Only after managed lateral navigation and managed speed have been engaged.",
        "Only after managed lateral navigation has been engaged.",
      ],
      answer: 3,
    },
    {
      id: 94,
      question:
        "During a turnaround, you notice that there is a residual ground speed on both NDs. How do you correct this?",
      options: [
        "As the engines have been shut down, it is necessary to carry out a full re-alignment.",
        "There is no corrective action possible until the aircraft is completely electrically shut down.",
        "Only after managed lateral navigation and managed speed have been engaged.",
        "It is possible to carry out a rapid alignment by turning off all 3 ADIRS momentarily.",
      ],
      answer: 3,
    },
    {
      id: 95,
      question: "Mark the correct statements:",
      options: [
        "A.) FMGS switches automatically from CLIMB to CRUISE phase when a/c reaches the cruise altitude entered on PROG page. It will be shown by ALT CRZ mode on FMA.",
        "If ALT is displayed on FMA after reaching the cruise flight level, FMGS is still in CLIMB phase. To force the FMGS to switch in CRUISE Phase, you have to enter the new CRZ ALT in PROG page.",
        "Both of the above are correct.",
      ],
      answer: 2,
    },
    {
      id: 96,
      question: "Mark the correct statements:",
      options: [
        "When in SRS Mode, IAS of the a/c will be limited to V2 + 10 kts in case of both engines during T/O. If one engine fails while a/c is still in SRS, the speed target will be highest of V2 or current speed, limited by v2 +15 kts.",
        "If a/c speed is more than V2 +15 and engine fails in SRS mode, a/c speed will be brought back to v2 +15 kts.",
        "All of the above are correct.",
      ],
      answer: 2,
    },
    {
      id: 97,
      question: "When is the SRS active?",
      options: [
        "During a Go Around (after the thrust levers are placed in the TOGA position) up to the acceleration altitude.",
        "At T/O, when TOGA or FLX power is set, SRS is displayed on the FMA and provides guidance up to the acceleration altitude.",
        "Both are correct.",
      ],
      answer: 2,
    },
    {
      id: 98,
      question:
        "The SRS flight guidance laws provide speed targets in SRS and includes some attitude protection. In the case of wind shear, what maximum attitude does the guidance law reduce the aircraft nose-up attitude to, during takeoff?",
      options: ["17.5 degrees", "22.5 degrees", "30 degrees."],
      answer: 1,
    },
    {
      id: 99,
      question: "In take off mode, SRS guidance will be displayed it",
      options: [
        "V2 is selected on FCU speed window",
        "V2 is defined on MCDU PERF T/O page",
        "V2 is selected on FCU and flaps are extended",
        "V2 is defined on MCDU and slats are extended.",
      ],
      answer: 3,
    },
    {
      id: 100,
      question: "After take off, the vertical guidance by SRS is disengaged",
      options: [
        "Automatically at FCU altitude",
        "By putting the speed knob",
        "Automatically at ACC ALT, does not disengage automatically in single engine",
        "All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 101,
      question: "SRS mode:",
      options: [
        "Disengages automatically, at the acceleration altitude for two engine operation. However, in engine out conditions, SRS does not disengage automatically at ACC ALT",
        "Disengages when crew engages another vertical mode",
        "During T/O, if altitude on FCU is set lower than current altitude, a/c will remain in SRS mode until pilot takes some corrective action.",
        "All of the above are correct",
      ],
      answer: 3,
    },
    {
      id: 102,
      question: "Does SRS provide any attitude protection?",
      options: [
        "Yes, along with attitude protection, SRS provides flight path protection and speed protection also.",
        "No, SRS provides only speed protection limiting the target speed to V2 +15",
      ],
      answer: 0,
    },
    {
      id: 103,
      question: "During short final, ATC advises to Go-Around. By advancing thrust levers to TOGA:",
      options: [
        "SRS mode engages with GA TRK if at least in Config 1{FMA displays SRS / GA TRK} and if FDs were off, FD bars are restored during SRS/GA TRK.",
        "When SRS mode is engaged, target speed is limited to Green Dot speed.",
        "Both the above are correct.",
      ],
      answer: 0,
    },
    {
      id: 104,
      question: "OPEN CLIMB (OP CLB) is a Managed mode.",
      options: [
        "True",
        "False",
        "It uses the AP/FD pitch mode to maintain a SPD/MACH, while the autothrust - if active - maintains maximum climb thrust.",
      ],
      answer: 1,
    },
    {
      id: 105,
      question: "When CLB Mode is engaged:",
      options: [
        "V/S window on FCU show dashes.",
        "The managed LVL / CH dot on the FCU lights up.",
        "FMA displays CLB in col 2.",
        "All of the above are correct",
      ],
      answer: 3,
    },
    {
      id: 106,
      question: "After SRS {TO or GA}, CLB mode engages automatically if",
      options: [
        "NAV Mode is engaged",
        "ACCEL ALT as defined / set in PERF TO or PERF GA page is below FCU selected altitude.",
        "Both {A} and {B} are correct.",
      ],
      answer: 2,
    },
    {
      id: 107,
      question: "In flight, if you have to engage CLB mode manually, following conditions are must:",
      options: [
        "NAV mode must be engaged",
        "FCU selected altitude must be higher than present a/c altitude which also is not ALT CSTR.",
        "You have to push in ALT select knob.",
        "All of the above conditions are required to engage CLB Mode.",
      ],
      answer: 3,
    },
    {
      id: 108,
      question:
        "Due to ATC requirements, you are given a new take-off clearance in which you have to maintain runway HDG after airborne. As such you use HDG / TRK selector and set the new HDG in the window. After airborne:",
      options: [
        "NAV will not get engaged at 30 ft.",
        "RWY TRK will get annunciated passing 30 ft on FMA until HDG/TRK knob is pulled.",
        "Both {A} & {B} are correct.",
      ],
      answer: 2,
    },
    {
      id: 109,
      question: "Pilot can cancel a HDG /TRK PRESET by:",
      options: [
        "Engaging NAV mode using DIR TO Pushing in HDG / TRK knob which will arm NAV mode {NAV Mode will engage if a/c is close to the active flight plan leg}.",
        "By disengaging AP / FD.",
        "All of the above are correct.",
      ],
      answer: 2,
    },
    {
      id: 110,
      question: "To preset a heading of 210 Degrees before take-off.",
      options: [
        "Pull HDG knob to disarm NAV mode, set 210 Degrees and press HDG knob to engage.",
        "Turn HDG knob, set 210 Degrees and pull to engage.",
        "Turn HDG knob, set 210 Degrees, before take-off. Pull HDG knob, when ATC clears to turn to 210 Degrees after take-off.",
        "Push HDG knob to disarm NAV mode, set 210 Degree and pull HDG knob to engage.",
      ],
      answer: 2,
    },
    {
      id: 111,
      question: "RWY TRK mode engages",
      options: [
        "At take off power application provided an ILS is tuned to a station corresponding to the departure runway.",
        "30 feet after lift- off if NAV was not armed.",
        "30 feet after lift- off if V2 is not entered on the PERF TAKE OFF page.",
        "As a lateral mode in the go-around phase",
      ],
      answer: 1,
    },
    {
      id: 112,
      question:
        "When a HDG or TRK is preset, OP CLB mode will engage at the acceleration altitude in place of CLB.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 113,
      question: "The lateral mode available during TAKE OFF before lift off",
      options: [
        "RWY mode if ILS turned corresponding to the departure runway",
        "RWY TRK mode",
        "RWY mode irrespective of an ILS is tuned or not",
        "NAV mode",
      ],
      answer: 0,
    },
    {
      id: 114,
      question:
        "In flight, if situation calls for, PFD and MCDU display a message proposing to change from Selected mode to managed mode.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 115,
      question:
        "In flight, either the AP/FD pitch control, or autothrust may acquire and hold a target speed or Mach number, depending on the engaged modes. Speed control is 'Managed' when the target comes from the SPD/MACH FCU window.",
      options: ["True", "False"],
      answer: 1,
    },
    {
      id: 116,
      question: "Speed control is:-",
      options: [
        "A.) Managed, when the target comes from the FMGS.",
        "B.) Selected, when the target comes from the SPD/MACH FCU window.",
        "C.) It uses the AP/FD pitch mode to maintain a SPD/MACH, while the autothrust - if active - maintains maximum climb thrust.",
        "D.) All are correct",
      ],
      answer: 3,
    },
    {
      id: 117,
      question: "NAV mode engages",
      options: [
        "At take off power application",
        "At acceleration altitude",
        "30 feet after lift- off provided HDG PRESET is done",
        "30 feet after lift- off provided HDG PRESET is not done.",
      ],
      answer: 3,
    },
    {
      id: 118,
      question: "NAV is armed on ground provided",
      options: [
        "F-PLAN is available and heading preset is selected on FCU",
        "F-PLAN is available and no heading preset is selected on FCU",
        "As in (b) and FDs are ON.",
        "F-PLAN is available and NAV aids are tuned manually on RMP",
      ],
      answer: 2,
    },
    {
      id: 119,
      question: "During descent, ALT* means:",
      options: [
        "A/C is acquiring a selected altitude.",
        "A/THR will be in THR IDLE mode.",
        "All of the above are correct.",
      ],
      answer: 0,
    },
    {
      id: 120,
      question:
        "Actions required are: AP OFF + Both FDs OFF when following TCAS Warning check list for RA message? A/THR will be in SPEED mode.",
      options: ["True", "False"],
      answer: 0,
    },
    {
      id: 121,
      question:
        "With FD engaged in OP – DES mode (AP-OFF) and ATHR active, aircraft is leveled above FCU altitude, the following may occur ?",
      options: [
        "Aircraft speed increased to Vmax and FD mode changes to V/S mode",
        "Aircraft speed decreases to VLS and FD mode changes to V/S mode",
        "Aircraft speed increased to Vmax and FD mode changes to OPCLB",
        "Aircraft speed decreases to VLS and now ATHR maintain speed at VLS",
      ],
      answer: 3,
    },
    {
      id: 122,
      question: "If the NAV mode is lost, the affect on the DES mode is",
      options: [
        "No affect at all DES Mode continues",
        "DES mode reverts to OP DES mode",
        "DES Mode reverts to V/S mode",
        "No vertical mode is available without NAV mode. Second column of FMA goes blank.",
      ],
      answer: 2,
    },
    {
      id: 123,
      question:
        "During descend phase of flight with DES mode engaged on FMA, if a/c enters, F-PLN discontinuity, the FMA changes from DES/NAV to",
      options: ["OP. DES/ HDG", "V/S/HDG", "OP DES/…"],
      answer: 1,
    },
  ],
};