import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "6E APRIL ATTEMPT 2024",
  questions: [
    {
      id: 1,
      question: "What colour are mandatory items in the MCDU denoted by",
      options: ["AMBER", "BLUE", "WHITE", "GREEN"],
      answer: 0,
    },
    {
      id: 2,
      question: "Which of these conditions trigger HYD PTU FAULT on the ECAM?",
      options: [
        "In flight, PTU at AUTO position does not run when G or Y reservoir level is low, and G or Y system pressure is low.",
        "On ground, PTU does not run if the differential pressure is higher than 650 PSI between G and Y system",
        "as in (a) & (b) if the last engine is started within 40 s following the end of the cargo doors operation",
      ],
      answer: 2,
    },
    {
      id: 3,
      question:
        "If, during the engine start, the ground crew reports a fuel leak from the engine drain mast?",
      options: [
        "run the engine at idle for 10 min. If the leak disappears during these 10 min, the aircraft can be dispatched without maintenance action.",
        "run the engine at idle for 5 min. If the leak disappears during these 5 min, the aircraft can be dispatched without maintenance action.",
        "If the leak is still present after 5 min, shut down the engine and request the maintenance personnel to investigate the leakage source.",
        "both b & c",
      ],
      answer: 3,
    },
    {
      id: 4,
      question: "EGPWS memory ITEM correct sequence?",
      options: [
        "AP.............................................................OFF THRUST LEVERS.....................................TOGA PITCH......................................................PULL UP SPEED BRAKES lever..............................CHECK RETRACTED BANK......................................................WINGS LEVEL or ADJUST",
        "AP.............................................................OFF PITCH......................................................PULL UP THRUST LEVERS.....................................TOGA BANK......................................................WINGS LEVEL or ADJUST SPEED BRAKES lever..............................CHECK RETRACTED",
        "AP.............................................................OFF PITCH......................................................PULL UP SPEED BRAKES lever..............................CHECK RETRACTED THRUST LEVERS.....................................TOGA BANK......................................................WINGS LEVEL or ADJUST",
        "AP.............................................................OFF PITCH......................................................PULL UP THRUST LEVERS.....................................TOGA SPEED BRAKES lever..............................CHECK RETRACTED BANK......................................................WINGS LEVEL or ADJUST",
      ],
      answer: 3,
    },
    {
      id: 5,
      question: "Differential positive / negative / safety valve limitations?",
      options: [
        "Maximum positive differential pressure......................................9.0 PSI Maximum negative differential pressure...................................-1.0 PSI Safety relief valve setting...............................................................8.6 PSI",
        "Maximum positive differential pressure......................................8.0 PSI Maximum negative differential pressure...................................-1.0 PSI Safety relief valve setting...............................................................8.6 PSI",
        "Maximum positive differential pressure......................................8.6 PSI Maximum negative differential pressure...................................-1.0 PSI Safety relief valve setting...............................................................9.0 PSI",
      ],
      answer: 0,
    },
    {
      id: 6,
      question:
        "During cruise, the controller maintains cabin altitude at ?",
      options: [
        "the level-off value",
        "at the landing field elevation, whichever is higher",
        "but the cabin altitude target is limited to a maximum of approximately 8 000 ft.",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 7,
      question: "What are the components of the pressurization system?",
      options: [
        "Two Cabin Pressure Controllers (CPC) One outflow valve(3 electric motors) One control panel Two safety valves",
        "Two Cabin Pressure Controllers (CPC) One Residual Pressure Control Unit (RPCU ) One outflow valve(3 electric motors) One control panel Two safety valves",
        "Two Cabin Pressure Controllers (CPC) One Residual Pressure Control Unit (RPCU ) One outflow valve One control panel Three safety valves",
        "Two Cabin Pressure Controllers (CPC) One Residual Pressure Control Unit (RPCU ) One outflow valve(2 electric motors) One control panel Two safety valves",
      ],
      answer: 1,
    },
    {
      id: 8,
      question: "When does GREEN EDP fault light illuminate ?",
      options: [
        "On ground Green EDP pump pressure is less with engine running.",
        "As in (a) or green reservoir is over heated",
        "As green reservoir has low quantity or low air pressure",
        "All the above are correct.",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/35d8f020-eea0-49d8-b5c0-c2b902ed83fb.jpg",
    },
    {
      id: 9,
      question: "During a manual start, what function does the FADEC perform?",
      options: [
        "Passive monitoring of the start sequence, to close the start valve and cut off the ignition on the ground.",
        "To control the start sequence and take corrective action in case of a failure or malfunction.",
        "The FADEC does not perform any function during a manual start and all actions have to be carried out by the pilots.",
      ],
      answer: 0,
      image: [
        "https://cms-cdn.classplus.co/parserImages/eb351e48-55ec-44bd-9b42-3bd6bffbf7ee.png",
        "https://cms-cdn.classplus.co/parserImages/173f2bf1-865d-4579-b9e4-c3a2cda97dc5.png",
      ],
    },
    {
      id: 10,
      question:
        "The FMGS updates the FM position via the use of GPS or radio navaids and it uses a priority rule for FM position update. What is the order of priority for determining FM position?",
      options: [
        "IRS-GPS, IRS-VOR/DME IRS-DME/DME, IRS only.",
        "IRS-GPS, IRS only, IRS-DME/DME, IRS-VOR/DME,",
        "IRS-GPS, IRS-DME/DME, IRS-VOR/DME, IRS only.",
      ],
      answer: 2,
      image: "https://cms-cdn.classplus.co/parserImages/2bb50b1e-9f9a-49cf-ace0-c699ce9c05a2.png",
    },
    {
      id: 11,
      question: "Flight Guidance (FG) part performs the following functions?",
      options: [
        "• Autopilot (AP) command • Flight Director (FD) command • Autothrust (A/THR) command Display management.",
        "• Autopilot (AP) command • Flight Director (FD) command • Autothrust (A/THR) command",
        "• Autopilot (AP) command • Flight Director (FD) command • Autothrust (A/THR) command • Management of flight planning",
      ],
      answer: 1,
    },
    {
      id: 12,
      question: "The Flight Management (FM) part controls the following functions?",
      options: [
        "• Autopilot (AP) command • Flight Director (FD) command • Management of flight planning • Prediction and optimization of performance • Display management",
        "• Navigation and management of navigation radios • Management of flight planning • Prediction and optimization of performance • Display management",
        "• Navigation and management of navigation radios • Flight Director (FD) command • Prediction and optimization of performance • Display management",
      ],
      answer: 1,
    },
    {
      id: 13,
      question: "F.O actions incase of a RTO?",
      options: [
        "REV ........ CHECK/ANNOUNCE DECEL.... CHECK/ANNOUNCE AUTOBRAKE......... MONITOR ANY AUDIO ........ CANCEL",
        "AS IN (a) ONCE AIRCRAFT STOPPED ATC....... NOTIFY EMER EVAC PROCEDURE(QRH) ..... LOCATE ECAM ACTIONS.................PERFORM",
        "REV ........ CHECK/ANNOUNCE DECEL.... CHECK/ANNOUNCE ANY AUDIO ........ CANCEL",
        'AS IN (c) ONCE AIRCRAFT STOPPED EMER EVAC PROCEDURE(QRH) ..... LOCATE ECAM ACTIONS.................PERFORM"',
      ],
      answer: 1,
    },
    {
      id: 14,
      question: "The A320's fuselage has?",
      options: [
        "4 passenger doors 6 emergency exits in the cabin Cockpit emergency exits (2 sliding windows) 3 cargo compartment doors 4 avionic compartment access doors.",
        "4 passenger doors 4 emergency exits in the cabin Cockpit emergency exits (2 sliding windows) 3 cargo compartment doors 4 avionic compartment access doors.",
        "4 passenger doors 4 emergency exits in the cabin Cockpit emergency exits (2 sliding windows) 4 cargo compartment doors 3 avionic compartment access doors.",
      ],
      answer: 1,
    },
    {
      id: 15,
      question: "Where can you see indications for RAT?",
      options: [
        "Hydraulics SD page",
        "electrical SD Page",
        "cabin pressurization SD page",
        "Both A and B",
      ],
      answer: 0,
    },
    {
      id: 16,
      question: "HYD reservoir pressurization?",
      options: [
        "HP bleed air from engine 1 pressurizes the hydraulic reservoirs automatically.",
        "As in (a) If the bleed air pressure is too low, the system takes bleed air pressure from the crossbleed duct",
        "HP bleed air from engine 2 pressurizes the hydraulic reservoirs automatically.",
        "As in (c) If the bleed air pressure is too low, the system takes bleed air pressure from the crossbleed duct",
      ],
      answer: 1,
    },
    {
      id: 17,
      question: "Wing Anti Ice. choose the correct option?",
      options: [
        "hot air from the pneumatic system heats the three outboard slats (3-4-5) of each wing",
        "When the aircraft is on ground, the flight crew can initiate a 30 s test sequence by turning the system ON.",
        "If the electrical power supply fails, the valves close.",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 18,
      question: "define v2 ?",
      options: [
        "Takeoff safety speed that the aircraft attains at the latest at an altitude of 35 ft with one engine failed, and maintains during the second segment of the takeoff.",
        "V2 = 1.2 × 0.94 VS1g = 1.13 VS1g",
        "both a & b",
      ],
      answer: 2,
    },
    {
      id: 19,
      question: "landing gear speed limitations?",
      options: [
        "(VLE)................................250 kt /M 0.67 (VLO extension) ............280 kt /M 0.60 (VLO retraction) ............220 kt /M 0.54",
        "(VLE)................................280 kt /M 0.67 (VLO extension) ............250 kt /M 0.60 (VLO retraction) ............220 kt /M 0.54",
        "(VLE)................................220 kt /M 0.67 (VLO extension) ............250 kt /M 0.60 (VLO retraction) ............280 kt /M 0.54",
      ],
      answer: 1,
    },
    {
      id: 20,
      question: "define Vref?",
      options: [
        "VREF means the steady landing approach speed at the 50 feet point for a defined landing configuration.",
        "VREF= VLS in CONF FULL",
        "VREF = 1.3 × 0.94 VS1g = 1.23 VS1g",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 21,
      question: "landing climb gradient ?",
      options: [
        "single engine operating, gear extended, slats flap in landing config ( config 3 or Full) climb gradient 2.1%",
        "both engines operating, gear retracted, slats flap in landing config ( config 3 or Full) climb gradient 3.2%",
        "both engines operating, gear extended, slats flap in landing config ( config 3 or Full) climb gradient 3.2%",
        "single engine operating, gear extended, slats flap in landing config ( config 3 or Full) clim gradient 2.1%",
      ],
      answer: 2,
    },
    {
      id: 22,
      question: "Vmca ?",
      options: [
        "Minimum control speed in flight at which the aircraft can be controlled with a maximum bank of 5 °, if one engine fails, the other engine remaining at takeoff thrust (takeoff flap setting, gear extended).",
        "Minimum control speed in flight at which the aircraft can be controlled with a maximum bank of 5 °, if one engine fails, the other engine remaining at takeoff thrust (takeoff flap setting, gear retracted).",
        "Minimum control speed in flight at which the aircraft can be controlled with a maximum bank of 5 °, if one engine fails, the other engine remaining at climb thrust (landing flap setting, gear retracted).",
        "Minimum control speed in flight at which the aircraft can be controlled with a maximum bank of 10 °, if one engine fails, the other engine remaining at takeoff thrust (takeoff flap setting, gear extended).",
      ],
      answer: 1,
    },
    {
      id: 23,
      question: "Low energy aural alert ?",
      options: [
        "repeated every 5 s, warns the flight crew that the aircraft's energy level is going below a threshold under which the flight crew has to increase thrust, in order to regain a positive flight path",
        "as in (a) It is available in Configuration 2, 3, and FULL below 2000 ft R.A",
        "as in (a) It is available in all configurations below 2000 ft R.A",
      ],
      answer: 1,
    },
    {
      id: 24,
      question: "when flying a constant vor radial you are flying a ?",
      options: ["great circle", "rhumb line"],
      answer: 0,
    },
    {
      id: 25,
      question:
        "What indication will you see on the overhead fuel panel if the center tank has more than 250 kilograms of fuel and the left or right wing tank have less than 5,000 kilograms.",
      options: [
        "Fuel Fault",
        "Fuel imbalance.",
        "FAULT light on MODE SEL PB/SW",
        "Fuel - Auto feed fault.",
      ],
      answer: 2,
      image: [
        "https://cms-cdn.classplus.co/parserImages/60df207f-f82c-4721-ae23-6367e440bae1.jpg",
        "https://cms-cdn.classplus.co/parserImages/ecf2fed1-4238-43bd-af3a-4336237ea817.jpg",
      ],
    },
    {
      id: 26,
      question:
        "If CG is near aft limit of aircraft : what will happen to following?",
      options: [
        "increased range and decreased stall speed",
        "decreased range and increased stall speed",
        "increased range and increased stall speed",
        "decreased range and decreased stall speed",
      ],
      answer: 0,
    },
    {
      id: 27,
      question: "In order to discontinue an approach?",
      options: [
        "aircraft should be at or above the altitude selected on the FCU",
        'as in (a) Announce "CANCEL APPROACH".',
        "When the aircraft is below the FCU altitude, the flight crew must apply the GO AROUND procedure",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 28,
      question: "MAN PITCH TRIM ONLY in red on the FMA ?",
      options: [
        "Displayed in case of loss of L + R elevators",
        "MECHANICAL BACK UP",
        "both a & b",
        "Direct law",
      ],
      answer: 2,
    },
    {
      id: 29,
      question:
        "What is mandated minimum Approach Climb gradient and minimum Landing climb gradient ?",
      options: ["2.1 % and 3.2%", "3.2 % and 2.1 %", "1.2% and 2.4%", "2.4 % and 1.2%"],
      answer: 0,
    },
    {
      id: 30,
      question: 'When does "Man Pitch Trim only" appear in red?',
      options: [
        "In Alternate Law",
        "In Direct Law",
        "In Mechanical Backup",
        "Loss of (L) + (R) Elevators",
        "Both ( C ) and (D)",
      ],
      answer: 4,
    },
    {
      id: 31,
      question:
        "If high speed protection is active, what is the maximum bank angle?",
      options: [
        "The bank angle is limited to 66'",
        'As in "A" and it will reduce to 40\' when side stick is released',
        "The bank angle is limited to 40'",
        'As in "C" and it will reduce to zero degrees when side stick is neutral.',
      ],
      answer: 3,
    },
    {
      id: 32,
      question: "A DISTRESS message differs from an URGENCY message because:",
      options: [
        "a. there is grave and imminent danger which requires immediate assistance.",
        "b. the aeroplane has suffered damage that endangers the ability to fly.",
        "c. the aeroplane will not be able to reach a suitable aerodrome.",
        "d. the situation concerns the safety of passengers on board or withing sight.",
      ],
      answer: 0,
    },
    {
      id: 33,
      question:
        "What is the minimum number of satellites required by a GPS in order to obtain a three dimensional fix?",
      options: ["4", "3", "5", "6"],
      answer: 0,
    },
    {
      id: 34,
      question:
        "What is the minimum number of satellites required for a Satellite-Assisted Navigation System (GNSS/GPS) to carry out two dimensional operation?",
      options: ["3", "4", "5", "2"],
      answer: 0,
    },
    {
      id: 35,
      question:
        "Signal reception is required from a minimum number of satellites that have adequate elevation and suitable geometry in order for a Satellite-Assisted Navigation System (GNSS/GPS) to carry out independent three dimensional operation, Receiver Autonomous Integrity Monitoring (RAIM) and to isolate any faulty satellite and remove it from contributing to the navigation solution. The number of satellites is:",
      options: ["6", "7", "4", "5"],
      answer: 0,
    },
    {
      id: 36,
      question:
        "Each IRS computes a mixed IRS/GPS position called?",
      options: ["the FM position", "the GPIRS position", "the IRS position"],
      answer: 1,
    },
    {
      id: 37,
      question:
        "After take off, the vertical guidance by SRS is disengaged",
      options: [
        "Automatically at FCU altitude",
        "By putting the speed knob",
        "Automatically at ACC ALT, does not disengage automatically in single engine",
        "All the above are correct",
      ],
      answer: 3,
    },
    {
      id: 38,
      question: "SRS mode:",
      options: [
        "Disengages automatically, at the acceleration altitude for two engine operation. However, in engine out conditions, SRS does not disengage automatically at ACC ALT",
        "Disengages when crew engages another vertical mode",
        "During T/O, if altitude on FCU is set lower than current altitude, a/c will remain in SRS mode until pilot takes some corrective action.",
        "All of the above are correct",
      ],
      answer: 3,
      image: "https://cms-cdn.classplus.co/parserImages/89d77a4c-5025-41cc-baa4-5695e9793820.png",
    },
    {
      id: 39,
      question:
        "When the crew does not have time to evaluate the situation they must and things are not going as expected",
      options: [
        "take over and apply corrective measures immediately MANAGED TO SELECTED GUIDANCE SELECTED TO MANUAL GUIDANCE",
        "Wait and Watch",
        "Keep Automation running",
        "None of the above",
      ],
      answer: 0,
    },
    {
      id: 40,
      question: "N/100 % selector on the oxygen mask ?",
      options: [
        "100 % : The mask delivers 100 % oxygen on demand",
        "N :The mask provides the flight crew with a mixture of air and oxygen. This mixture changes with cabin altitude. The higher the cabin altitude, the more oxygen the mask provides, until the mask supplies 100 % oxygen.",
        "both a& b",
      ],
      answer: 2,
    },
    {
      id: 41,
      question:
        "Which combination of design features is known to be responsible for deep stall?",
      options: [
        "A) Swept back wings and a T-tail.",
        "B) Swept back wings and wing mounted engines.",
        "C) Straight wings and aft fuselage mounted engines.",
        "D) Straight wings and a T-tail.",
      ],
      answer: 0,
    },
    {
      id: 42,
      question:
        "An aeroplane has a stall speed of 100 kt at a load factor n=1. In a turn with a load factor of n=2, the stall speed is:",
      options: ["A) 70 kts", "B) 141 kts", "C) 200 kts", "D) 282 kts"],
      answer: 1,
    },
    {
      id: 43,
      question: "A high aspect ratio wing:",
      options: [
        "A) increases induced drag.",
        "B) is structurally stiffer than a low aspect ratio.",
        "C) decreases induced drag.",
        "D) has a higher stall angle than a low aspect ratio.",
      ],
      answer: 2,
    },
    {
      id: 44,
      question:
        "High Aspect Ratio, as compared with low Aspect Ratio, has the effect of:",
      options: [
        "A) increasing lift and drag.",
        "B) decreasing induced drag and critical angle of attack.",
        "C) increasing lift and critical angle of attack",
        "D) increasing induced drag and decreasing critical angle of attack.",
      ],
      answer: 1,
    },
    {
      id: 45,
      question:
        "Which location on the aeroplane has the largest effect on the induced drag?",
      options: [
        "A) Wing root junction.",
        "B) Wing tip.",
        "C) Engine cowling.",
        "D) Landing gear",
      ],
      answer: 1,
    },
    {
      id: 46,
      question:
        "Given: Distance 'A' to 'B' is 100 NM, Fix obtained 40 NM along and 6 NM to the left of course. What heading alteration must be made to reach 'B'?",
      options: ["A 9° Right", "B 6° Right", "C 18° Right", "D 15° Right"],
      answer: 3,
    },
    {
      id: 47,
      question:
        "On a Lambert conformal conic chart, with two standard parallels, the quoted scale is correct:",
      options: [
        "A along the parallel of origin",
        "B along the prime meridian",
        "C along the two standard parallels",
        "D in the area between the standard parallels",
      ],
      answer: 2,
    },
    {
      id: 48,
      question:
        "The hysteresis error of an altimeter varies substantially with the:",
      options: [
        "a) time passed at a given altitude.",
        "b) mach number of the aircraft.",
        "c) aircraft altitude.",
        "d) static temperature.",
      ],
      answer: 0,
    },
    {
      id: 49,
      question:
        "On a Lambert conformal conic chart, the distance between parallels of latitude spaced the same number of degrees apart :",
      options: [
        "A is constant between, and expands outside, the standard parallels",
        "B expands between, and reduces outside, the standard parallels",
        "C is constant throughout the chart D reduces between, and expands outside, the standard parallels",
        "D reduces between, and expands outside, the standard parallels",
      ],
      answer: 3,
    },
    {
      id: 50,
      question:
        "An aircraft at FL330 is rerquired to commence descent when 65 NM from a VOR and to cross the VOR at FL100. The mean GS during the descent is 330 kt. What is the minimum rate of descent required?",
      options: ["A 1850 FT/MIN", "B 1950 FT/MIN", "C 1650 FT/MIN", "D 1750 FT/MIN"],
      answer: 1,
    },
    {
      id: 51,
      question:
        "Given: Distance 'A' to 'B' is 90 NM, Fix obtained 60 NM along and 4 NM to the right of course. What heading alteration must be made to reach 'B'?",
      options: ["A 4° Left", "B 8° Left", "C 12° Left", "D 16° Left"],
      answer: 2,
    },
    {
      id: 52,
      question: "Minimum Equipment List?",
      options: [
        "is a list of equipment that can be inop while undertaking a flight and additional procedures that need to be carried out",
        "is based on the MMEL made by the manufacturer, MEL is made by the operator approved by the regulator",
        "MEL is inserted in the OPS MANUAL.",
        "All of the above",
      ],
      answer: 3,
    },
    {
      id: 53,
      question: "Ground Speed mini is available?",
      options: [
        "Speed Managed, Approach Phase activated, slats extended.",
        "Speed Managed, Approach Phase activated, A/thr active.",
        "Speed selected, Approach Phase activated, A/thr active.",
        "Speed Managed, Approach Phase activated, A/thr active, FD's on",
      ],
      answer: 0,
    },
    {
      id: 54,
      question: "while refueling an aircraft ?",
      options: [
        "shall be done out door not less than 15 meters from any building",
        "smoking / naked flame not within 30 meters",
        "fueling shall stop when a turbo jet aircraft brings the rear jet out let within 43 meters",
        "all of the above; and a 3 meter danger zone",
      ],
      answer: 3,
    },
    {
      id: 55,
      question: "Cost Index ?",
      options: [
        "cost of time / cost of fuel (CT/CF)",
        "CI = 0 minimum fuel consumption max range/time",
        "CI = 999 min time",
        "ALL OF THE ABOVE, and automatically set to 0 in case of diversion with Alternate activated.",
      ],
      answer: 3,
    },
    {
      id: 56,
      question:
        "When an aircraft is rolled to port, adverse yaw will be reduced by:",
      options: [
        "A) Frise ailerons producing increased profile leading edge drag on both surfaces.",
        "B) the leading edge of the down going aileron protruding into the airflow.",
        "C) a Frise aileron being effective on the port wing.",
        "D) the down going aileron producing a greater angle of deflection than the up going aileron.",
      ],
      answer: 2,
    },
    {
      id: 57,
      question: "RLD ?",
      options: [
        "The aircraft's landing weight must permit landing within 60% of the Landing Distance Available at both the destination and any alternate airport. RLD dry = ALD / 0.6 ≤ LDA",
        "If the surface is wet, the required landing distance must be at least 115% of that of a dry surface.",
        "RLD wet = 1.15 RLD dry ≤ LDA",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 58,
      question:
        "accesory gear box drives various accessories with ___________________ and carries out the following functions___________-?",
      options: [
        "mechanical power via the HP shaft",
        "The engine-driven hydraulic pumps The oil feed pump The main engine fuel pump The engine-driven generators The FADEC alternator The pneumatic starter that enables the engine start",
        "both a & B",
      ],
      answer: 2,
    },
    {
      id: 59,
      question:
        "The Bypass Ratio is the ratio of the mass airflow which flows through the fan-duct (bypass duct) to the mass of air which is directed through the hot core. Fan flow is 210 lb core flow is 30 lb what is the by pass ratio ?",
      options: ["7 : 1", "6 : 1", "8 : 1", "5 : 1"],
      answer: 1,
    },
    {
      id: 60,
      question:
        "An abrupt head change in IMC conditions causes what kind of illusion ?",
      options: [
        "depth illusion",
        "optical illusion / somatogravic illusion",
        "coriolis illusion",
        "the bends",
      ],
      answer: 2,
    },
    {
      id: 61,
      question:
        "If the flight crew has selected a flex takeoff temperature on the MCDU that is lower than the current Total Air Temperature (TAT). ?",
      options: [
        "engine produces TOGA Thrust",
        "engine produces Climb Thrust",
        "engine produces Maximum Continuous Thrust (MCT).",
      ],
      answer: 2,
    },
    {
      id: 62,
      question: "Cabin Door Slide armed ?",
      options: [
        '"SLIDE" INDICATION in white on the DOOR/OXY PAGE',
        "SLIDE ARMED indication comes up in white on the cabin door, if control handle is operated when slide is armed",
        "as in (b) SLIDE ARMED indication appears in black",
        "all of the above",
      ],
      answer: 3,
    },
    {
      id: 63,
      question:
        "An aeroplane maintains straight and level flight while the IAS is doubled. The change in lift coefficient will be:",
      options: ["x 4.0", "x 0.25", "x 2.0", "x 0.5"],
      answer: 1,
    },
    {
      id: 64,
      question:
        "If IAS is increased from 80 kt to 160 kt at a constant air density TAS will double. What would be the effect on (i) CDI and (ii) DI?",
      options: [
        "A) (i) 1/16; (ii) 1/4",
        "B) (i) 2; (ii) 2",
        "C) (i) 4; (ii) 2",
        "D) (i) 1/4; (ii) 4",
      ],
      answer: 0,
    },
    {
      id: 65,
      question: "IDG DISCONNECTION ?",
      options: [
        "Maintaining the IDG pb-sw during more than 3 s may damage the IDG disconnection mechanism.",
        "AS IN (A) and Disconnect the IDG only when the engine is running or windmilling. If not, the IDG will be damaged when starting the engine.",
        "AS IN (A) Disconnect the IDG only when the engine is stopped on the ground. If not, the IDG will be damaged when starting the engine.",
        "only A",
      ],
      answer: 1,
    },
    {
      id: 66,
      question:
        "while climbing to FL 250, when passing FL 200, the flight crew selects FL 180 on the FCU. what effect in any will happen on the FMA?",
      options: ["CLB / OPN CLB to V/S", "CLB to OPN CLB", "OPN CLB", "Aircraft will descend to FL 180"],
      answer: 0,
    },
    {
      id: 67,
      question:
        "Wing tip tanks installed on an aircraft. what effect will it have on 1. induced drag 2. parasite drag?",
      options: [
        "INCREASES / INCREASES",
        "REDUCES / INCREASES",
        "REDUCES / REDUCES",
        "INCREASES / REDUCES",
      ],
      answer: 1,
    },
    {
      id: 68,
      question: "Tropical revolving storm is most severe ?",
      options: [
        "Eye of the storm",
        "wall of the storm",
        "storm front",
        "behind the storm",
      ],
      answer: 1,
    },
    {
      id: 69,
      question:
        "high AOA protection : choose the correct option? 1. When the current AOA becomes greater than αPROT, the high AOA protection activates. 2. the normal law demand is modified and the sidestick input is an AOA demand, instead of a load factor demand. 3. the flight crew releases the sidestick, the AOA returns to αPROT and stays there 4. At takeoff, the αPROT is equal to the αMAX for 5 s 5. Between the αPROT and αMAX, αFloor protection may automatically set the go-around thrust 6. the bank angle will not go beyond 45 °",
      options: ["1,3,5", "1,2,3,5", "all of the above", "1,2,4,6"],
      answer: 2,
    },
    {
      id: 70,
      question:
        "The undercarriage of an aeroplane moves rearward when it is being retracted. Does this affect the CG?",
      options: [
        "A – No, the position of the CG would remain the same",
        "B – Yes, but the CG movement could not be calculated",
        "C – Yes, the CG would move aft",
        "D – Yes, the CG would move forward",
      ],
      answer: 2,
    },
    {
      id: 71,
      question:
        "For a large aircraft where the main and nose landing gears retract forward, the effect on the CG on lowering the gear is:",
      options: [
        "A – to move aft",
        "B – to move forward",
        "C – to remain static",
        "D – to move forward then aft",
      ],
      answer: 0,
    },
    {
      id: 72,
      question: "What centre of gravity movement may be expected on gear retraction?",
      options: [
        "A – CG moves forward",
        "B – CG moves rearward",
        "C – no significant change to CG position",
        "D – CG moves far rearward",
      ],
      answer: 3,
    },
    {
      id: 73,
      question:
        "If all the moments are positive when calculating mass (weight) and balance, the position of the datum would be at the:",
      options: [
        "A – trailing edge of the wing",
        "B – main wheels centreline",
        "C – nose, or forward of the aircraft",
        "D – centre line of the nose or tail wheel depending on the aircraft type",
      ],
      answer: 2,
    },
  ],
};