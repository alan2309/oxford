import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "A320 SYSTEMS TEST - HYDRAULICS - 01",
  questions: [
    {
      id: 1,
      question: "Fluid can be transferred between hydraulic systems.",
      options: ["True", "False"],
      answer: 1
    },
    {
      id: 2,
      question: "Which hydraulic systems have engine driven pumps?",
      options: ["Green and blue.", "Green and yellow.", "Blue and yellow."],
      answer: 1
    },
    {
      id: 3,
      question: "The Load Alleviation Function (LAF) accumulators are pressurized by which hydraulic systems?",
      options: ["Green and blue.", "Green and yellow.", "Blue and yellow."],
      answer: 1
    },
    {
      id: 4,
      question: "The RAT pressurizes the Blue hydraulic system to approximately ______ psi.",
      options: ["1500", "2500", "3000", "3500"],
      answer: 1
    },
    {
      id: 5,
      question: "How many pumps has the yellow system to provide pressure (not counting the PTU)?",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      id: 6,
      question: "The hand pump supplies yellow system pressure to the:",
      options: ["Normal brakes.", "Alternate brakes", "Passenger doors.", "Cargo doors."],
      answer: 3
    },
    {
      id: 7,
      question: "It is possible to pressurize the green hydraulic system on the ground via the PTU when the parking brake is set.",
      options: ["True", "False"],
      answer: 0
    },
    {
      id: 8,
      question: "The Eng Pump Fault light extinguishes when the engine pump switch is selected to off except for:",
      options: ["Reservoir low level.", "Pump low pressure.", "An overheat."],
      answer: 2
    },
    {
      id: 9,
      question: "With the airplane on the ground and the blue electric pump switch in AUTO; the blue pump will be energized when:",
      options: ["One engine is running.", "The BLUE PUMP OVRD switch has been pressed.", "First two statements are correct."],
      answer: 2
    },
    {
      id: 10,
      question: "The PTU Fault light illuminates when the:",
      options: ["PTU is inoperative.", "Green or yellow reservoir has low air pressure.", "PTU pump has overheated."],
      answer: 1
    },
    {
      id: 11,
      question: "The PUMP identification number on the ECAM HYD page becomes amber when:",
      options: ["System pressure is below 1450 psi.", "N2 is below idle.", "The reservoir level is low."],
      answer: 1
    },
    {
      id: 12,
      question: "The _____ hydraulic system provides power for gear extension/retraction.",
      options: ["Yellow.", "Blue", "Green"],
      answer: 2
    },
    {
      id: 13,
      question: "When using the alternate brake system on accumulator pressure only; the accumulator supplies:",
      options: ["Partial brakes.", "At least seven full brake applications.", "Alternate brakes with antiskid."],
      answer: 1
    },
    {
      id: 14,
      question: "The brakes pressure indication on TRIPLE PRESSURE INDICATOR reads which system pressure?",
      options: ["Yellow", "Blue", "Green"],
      answer: 0
    },
    {
      id: 15,
      question: "The aircraft's three hydraulic systems are normally pressurized by:",
      options: ["Two engine driven pumps and one electric pump.", "Two electric pumps and one PTU.", "Two electric pumps and one engine driven pump.", "Two electric pumps and two engine driven pumps."],
      answer: 0
    },
    {
      id: 16,
      question: "When will the yellow system electric pump operate? (AC power is available).",
      options: ["During the second engine start.", "When the first engine MASTER switch is moved to the ON position.", "If any N2 RPM is less than 45%.", "When the yellow electric system ELEC PUMP push button is selected to ON or the ground crew activates a cargo door switch."],
      answer: 3
    },
    {
      id: 17,
      question: "What are the major equipment losses with loss of Green system?",
      options: ["Speed Brakes.", "Auto Brakes, Reverser 1", "Alternate Brakes.", "The upper and lower rudders."],
      answer: 1
    },
    {
      id: 18,
      question: "The hydraulic PTU will activate if:",
      options: ["A significant pressure loss occurs in any of the three hydraulic systems.", "A significant pressure loss occurs in the green or yellow hydraulic system.", "Both are correct."],
      answer: 1
    },
    {
      id: 19,
      question: "After extending the RAT, is it possible to check its position and status?",
      options: ["Check to see if the blue system ELEC PUMP FAULT light is not illuminated.", "Yes, select the ECAM ELEC page.", "Yes, select the ECAM HYD page.", "No. It is not possible."],
      answer: 2
    },
    {
      id: 20,
      question: "The RAT is capable of powering a pump which will pressurize?",
      options: ["Only the blue system.", "All systems.", "The blue and yellow system.", "The blue and green system."],
      answer: 0
    },
    {
      id: 21,
      question: "How is the yellow hydraulic system pressurized?",
      options: ["An engine driven pump, an electric pump, the PTU using the green system and, for the cargo doors only, a hand pump.", "An engine driven pump, electric pump, the PTU using the blue system and, for the cargo doors only, a hand pump.", "An engine driven pump, an electric pump, and the PTU using the green system."],
      answer: 0
    },
    {
      id: 22,
      question: "When will normal operation of the BLUE system hydraulic pump begin?",
      options: ["During the first engine start.", "When the first engine MASTER switch is moved to the ON position.", "Only when the RAT is deployed.", "After both engines are started."],
      answer: 0
    },
    {
      id: 23,
      question: "The PTU comes into action automatically when the differential pressure between the GREEN and the YELLOW systems is greater than ______ psi.",
      options: ["300.", "500.", "650.", "700."],
      answer: 1
    },
    {
      id: 24,
      question: "When will the yellow system electric pump operate? (AC power is available)",
      options: ["During the second engine start.", "When the yellow electric system ELEC PUMP push button is selected to ON or the ground crew activates a cargo door switch.", "If any N2 RPM is less than 45%.", "When the first engine MASTER switch is moved to the ON position."],
      answer: 1
    },
    {
      id: 25,
      question: "You are at the gate. You have started engine #2. Before starting engine #1, you notice that the PTU test has not been activated. Is it normal?",
      options: ["No. You have to call the mechanics.", "The PTU has been shutoff", "The PTU will not work until the second engine has been started."],
      answer: 2
    },
    {
      id: 26,
      question: "You get a G RSVR OVHT message. Why does the ECAM procedure ask you to switch the PTU off first?",
      options: ["To prevent the hot hydraulic fluid from being transferred to the YELLOW system.", "To depressurize the YELLOW and GREEN systems.", "To prevent the BLUE system from pressurizing the GREEN system.", "To prevent the PTU from pressurizing the GREEN system"],
      answer: 3
    },
    {
      id: 27,
      question: "For hydraulic system malfunctions, when will the RAT deploy?",
      options: ["Automatically with the failure of both the green and blue hydraulic systems.", "Automatically with the failure of both the green and yellow hydraulic systems.", "Only when the guarded RAT MAN ON push button is selected by the crew.", "When airspeed drops below 100 knots with the gear up."],
      answer: 2
    },
    {
      id: 28,
      question: "What does the RAT MAN ON switch do?",
      options: ["Extends RAT, pressurizes BLUE system, starts Emergency Generator.", "Extends RAT, must push RAT MAN ON again to pressurize BLUE system.", "Extends RAT, pressurizes GREEN system, starts Emergency Generator.", "Extends RAT, pressurizes BLUE system, does not start Emergency Generator."],
      answer: 3
    },
    {
      id: 29,
      question: "Describe the PTU status with a green system reservoir overheat, low pressure or low fluid level?",
      options: ["The PTU will be inhibited", "The crew must select the PTU ON.", "The PTU fault light will remain illuminated as long as the over heat exists.. The PTU should be selected OFF.", "The crew must select the PTU OFF then ON"],
      answer: 2
    },
    {
      id: 30,
      question: "During engine start up, when is the BLUE hydraulic system pressurized?",
      options: ["As soon as the PTU is turned on.", "As soon as the BLUE electric pump is manually turned on.", "Automatically after first engine start.", "As soon as the engine master switch is set to IGN/START"],
      answer: 2
    },
    {
      id: 31,
      question: "If you lost the GREEN system, what equipment is lost?",
      options: ["Reverser 1 and gear retraction.", "Reverser 1, gear retraction and normal braking", "Reverser 2, gear retraction, cargo doors and nose wheel steering.", "Reverser 2 and gear retraction."],
      answer: 1
    },
    {
      id: 32,
      question: "Crew members can use a hand pump to pressurize the YELLOW system in order to operate the cargo doors when no electrical power is available.",
      options: ["True.", "False."],
      answer: 0
    },
    {
      id: 33,
      question: "If you lost the YELLOW system, what equipment is lost?",
      options: ["Reverser 2", "Parking brake accumulator recharging", "Cargo door.", "All of the above."],
      answer: 3
    },
    {
      id: 34,
      question: "On the hydraulic quantity indicator what does the amber level indicate?",
      options: ["The warning level.", "The reservoir contents", "The normal filling level", "The temperature of the hydraulic fluid."],
      answer: 0
    },
    {
      id: 35,
      question: "What does a PTU FAULT light indicate?",
      options: ["GREEN or YELLOW reservoir overheat.", "GREEN or YELLOW reservoir low air pressure.", "GREEN or YELLOW reservoir low level.", "All of the above."],
      answer: 3
    },
    {
      id: 36,
      question: "If you lost the BLUE system, what equipment is lost?",
      options: ["The Emergency generator.", "Cargo door", "Nose wheel steering.", "All of the above."],
      answer: 0
    },
    {
      id: 37,
      question: "All hydraulic systems have a fire shutoff valve.",
      options: ["True.", "False."],
      answer: 1
    },
    {
      id: 38,
      question: "What is the signification of an amber RAT indicator (ECAM HYD page)?",
      options: ["The RAT is incorrectly stowed.", "The RAT is not stowed.", "Pressure for stowing the RAT has been applied, or the RAT pump is not available."],
      answer: 2
    },
    {
      id: 39,
      question: "How can the pilot switch off the Fire Shut Off Valves?",
      options: ["By de-pressing the Hydraulic Shut Off Switches.", "By selecting the Hydraulic Valve Switch to the \"Closed\" position", "By de-pressing the Engine Fire Switches"],
      answer: 2
    },
    {
      id: 40,
      question: "If the Landing Gear was gravity extended using the hand crank on the center pedestal, what other systems will be inoperative?",
      options: ["Nose wheel steering and auto braking", "Nose wheel steering only.", "Anti-skid and auto brakin.", "Nose wheel steering and anti-skid."],
      answer: 1
    },
    {
      id: 41,
      question: "Fluid can be transferred between hydraulic systems.",
      options: ["True", "False"],
      answer: 1
    },
    {
      id: 42,
      question: "Which hydraulic systems have engine driven pumps?",
      options: ["Green and blue.", "Green and yellow.", "Blue and yellow."],
      answer: 1
    },
    {
      id: 43,
      question: "The RAT pressurizes",
      options: ["The Blue hydraulic system", "The Green hydraulic system", "The Yellow hydraulic system"],
      answer: 0
    },
    {
      id: 44,
      question: "With the airplane on the ground and the blue electric pump switch in AUTO; the blue pump will be energized when:",
      options: ["One engine is running", "The BLUE PUMP OVRD switch on the maint. Panel has been pressed.", "Both statements are correct ."],
      answer: 2
    },
    {
      id: 45,
      question: "It is possible to pressurize the green hydraulic system on the ground via the PTU when the parking brake is set, when both engines are off.",
      options: ["true", "False"],
      answer: 0
    },
    {
      id: 46,
      question: "The ENG Pump Fault light after engine start can come when:",
      options: ["The reservoir has Lo Level or Low Air Pressure or overheat.", "The engine pump pressure is low.", "Both statements are correct"],
      answer: 2
    },
    {
      id: 47,
      question: "The ENG Pump Fault light extinguishes when the engine pump switch is selected to off except for:",
      options: ["Reservoir low level.", "Pump low pressure", "An overheat"],
      answer: 2
    },
    {
      id: 48,
      question: "The PTU Fault light extinguishes when the PTU p/b switch is selected to off except for:",
      options: ["Reservoir low level.", "Pump low pressure", "An overheat"],
      answer: 2
    },
    {
      id: 49,
      question: "The PTU Fault light illuminates when the:",
      options: ["PTU is inoperative.", "Green or yellow reservoir has low air pressure.", "PTU pump has overheated"],
      answer: 1
    },
    {
      id: 50,
      question: "The hydraulic PTU will activate if:",
      options: ["A significant pressure loss occurs in any of the three hydraulic systems.", "A significant pressure loss occurs in the green or yellow hydraulic system", "Along with(B) above and there is no inhibition situation for PTU."],
      answer: 2
    },
    {
      id: 51,
      question: "The PTU comes into action automatically when the differential pressure between the GREEN and the YELLOW systems is greater than      psi.",
      options: ["300.", "500.", "650.", "750."],
      answer: 1
    },
    {
      id: 52,
      question: "Describe the PTU status with a green system reservoir overheats, low pressure or low fluid level.",
      options: ["The PTU will be inhibited.", "The crew must select the PTU ON.", "The PTU FAULT light will get illuminated. The PTU should be selected OFF.", "The crew must recycle the PTU OFF then ON."],
      answer: 2
    },
    {
      id: 53,
      question: "The PUMP identification number on the ECAM HYD page becomes amber when:",
      options: ["System pressure is below 1450 psi.", "N2 is below idle.", "The reservoir level is low.", "There is no such thing on a320."],
      answer: 1
    },
    {
      id: 54,
      question: "How is the yellow hydraulic system pressurized?",
      options: ["An engine driven pump, an electric pump, the PTU using the green system and a hand pump for the cargo doors only..", "An engine driven pump, electric pump, the PTU using the blue system and, a hand pump for the cargo doors only.", "An engine driven pump, an electric pump, and the PTU using the green system"],
      answer: 0
    },
    {
      id: 55,
      question: "When will the yellow system electric pump operate? (AC power is available)",
      options: ["During the second engine start..", "When the yellow electric system ELEC PUMP push button is selected to ON or the ground crew activates a cargo door switch..", "If any N2 RPM is less than 45%.", "When the first engine MASTER switch is moved to the ON position."],
      answer: 1
    },
    {
      id: 56,
      question: "For hydraulic system malfunctions, when will the RAT deploy?",
      options: ["Automatically with the failure of both the green and blue hydraulic systems.", "Automatically with the failure of both the green and yellow hydraulic systems.", "Only when the guarded RAT MAN ON push button is selected by the crew", "When airspeed drops below 100 knots with the gear up"],
      answer: 2
    },
    {
      id: 57,
      question: "What does the RAT MAN ON switch on the HYD panel do?",
      options: ["Extends RAT, pressurizes BLUE system, starts Emergency Generator.", "Extends RAT, must push RAT MAN ON again to pressurize BLUE system.", "Extends RAT, pressurizes GREEN system, starts Emergency Generator", "Extends RAT, pressurizes BLUE system, and does not start Emergency Generator."],
      answer: 3
    },
    {
      id: 58,
      question: "If you lost the GREEN system, what equipment is lost?",
      options: ["Reverser 1 and gear retraction.", "Reverser 1, gear retraction normal braking and auto brakes", "Reverser 2, gear retraction, cargo doors and nose wheel steering.", "Reverser 2 and gear retraction"],
      answer: 1
    },
    {
      id: 59,
      question: "If you lose the YELLOW Hyd system due to LO Level, what equipment is lost?",
      options: ["Thrust Reverser 2", "Nose Wheel Steering.", "Cargo door.", "All of the above"],
      answer: 3
    },
    {
      id: 60,
      question: "If YELLOW ELECT Pump Overheats when it was supplying Yellow Hyd sys:",
      options: ["OVHT appears in amber near ELEC on HYD ECAM page.", "PTU Fault light will not come ON in this case.", "Both statements are correct."],
      answer: 2
    },
    {
      id: 61,
      question: "If you lose BLUE system, what equipment is lost?",
      options: ["The Emergency generator.", "Cargo door", "Nose wheel sterring.", "All of the above"],
      answer: 0
    },
    {
      id: 62,
      question: "All hydraulic systems have a fire shutoff valve.",
      options: ["True", "False."],
      answer: 1
    },
    {
      id: 63,
      question: "What is the signification of an amber RAT indication (on ECAM HYD page)?",
      options: ["The RAT is not stowed", "Pressure for stowing the RAT has been applied, or the RAT pump is not available & You get ECAM of HYD RAT FAULT", "All of the above"],
      answer: 1
    },
    {
      id: 64,
      question: "By what action of the pilot, Fire Shut Off Valve closes ?",
      options: ["By pressing the Hydraulic Shut Off Switch to OFF.", "By selecting PTU p/b to OFF", "By selecting the Eng Driven Pump p/b to the OFF position", "By pushing the Engine Fire p/b."],
      answer: 3
    },
    {
      id: 65,
      question: "In case of Dual G + B Hyd. SYS LO PR",
      options: ["RAT will have to be deployed manually using RAT MAN ON p/b from Hyd. panel.", "L/Gear will have to be extended using GRAVITY EXTENSION procedure.", "Both are correct"],
      answer: 2
    },
    {
      id: 66,
      question: "In case of landing with Dual G + Y Hyd. SYS LO PR on a short airfield, you have to exercise utmost care as",
      options: ["You do not have Thrust Reversers on both engines, Nose Wheel Steering & Anti-skid.", "You will be on Alternate Brakes without anti-skid so 7 full brake applications are available.", "Flaps are not available and so is pitch trim not available.", "All are correct"],
      answer: 3
    },
    {
      id: 67,
      question: "Hand pump can be used pressurize the YELLOW system in order to operate the cargo doors when no electrical power is available.",
      options: ["True", "False"],
      answer: 0
    },
    {
      id: 68,
      question: "The hand pump supplies yellow pressure to the:",
      options: ["Normal brakes", "Alternate brakes", "Passenger doors", "Cargo doors."],
      answer: 3
    },
    {
      id: 69,
      question: "How are the hydraulic reservoir pressurized pneumatically ?",
      options: ["By APU bleed directly.", "By engine 2 bleed directly.", "By engine 1 bleed directly or cross bleed duct", "By engine 2 bleed directly or cross bleed duct."],
      answer: 2
    },
    {
      id: 70,
      question: "When do you use 'RAT MAN ON \" pb",
      options: ["If blue electric pump is failed.", "If there is a dual Hydraulic failure along with blue system.", "As in (b) and only in approach RAT is extended.", "If blue electric pump is over heated."],
      answer: 1
    },
    {
      id: 71,
      question: "How will you recover the yellow system if it is lose due to LO LVL ?",
      options: ["Yellow system can be recovered in approach only by electric pump", "Yellow system can be recovered in approach only by PTU", "Yellow system cannot be recovered.", "Both (a) and (b) are correct."],
      answer: 2
    },
    {
      id: 72,
      question: "What are the indications in the cockpit due to yellow reservoir OVHT ?",
      options: ["PTU, yellow EDP fault lights with ECAM message and master caution.", "PTU, yellow EDP, yellow electric pump fault lights with ECAM message and master caution", "As in (b) but yellow electric pump fault light illuminate only when the yellow switch is ON", "Yellow EDP, yellow electric pump fault lights with ECAM warning"],
      answer: 1
    },
    {
      id: 73,
      question: "When does GREEN EDP fault light illuminate ?",
      options: ["On ground Green EDP pump pressure is less with engine running.", "As in (a) or green reservoir is over heated", "As green reservoir has low quantity or low air pressure", "All the above are correct."],
      answer: 3
    },
    {
      id: 74,
      question: "Blue electric pump pb switch is at AUTO with AC power available. When will the pump be energised pump override pb is at OFF",
      options: ["On ground, only after No. 2 engine is started.", "On ground, only after No. 1 engine is started", "On ground, after any one engine is started", "In flight, only when an engine is operating"],
      answer: 2
    },
    {
      id: 75,
      question: "OVHT amber message on the ECAM HYD page near ELEC pump indication means",
      options: ["Overheat of the system fluid", "Overheat of the pump itself", "In case of yellow pump OVHT the PTU must also be switched OFF", "In case of blue pump OVHT, the RAT must be extended."],
      answer: 1
    },
    {
      id: 76,
      question: "NORMAL HYDRAULIC POWER is provided by",
      options: ["Engine driven pumps for all systems", "Engine driven pumps for green and yellow, electrical pump for blue", "Electrical pumps for blue and yellow, engine driven pump for green.", "Engine driven pumps for green and blue, electrical pump for yellow"],
      answer: 1
    },
    {
      id: 77,
      question: "Can you recover a Hyd. System if it is lost due to LO LVL?",
      options: ["Yellow system can be recovered in approach only by electric pump", "Green system can be recovered in approach but only by PTU", "Blue system can be recovered but by RAT extension.", "Hyd. Sys can not be recovered if it is lost due to LO LVL."],
      answer: 3
    },
    {
      id: 78,
      question: "What happens to PTU with PTU push button at AUTO when aircraft makes a single engine landing with No1 engine shut down?",
      options: ["PTU runs in flight and stops as soon as both main landing gears are compressed", "PTU runs in flight and continues to run even after landing but PTU will stop if you apply parking brake.", "PTU runs only after landing and pressurize Green hydraulic system by using Yellow Hyd. Pressure."],
      answer: 1
    },
    {
      id: 79,
      question: "You get a G RSVR OVHT message. Why does the ECAM procedure ask you to switch the PTU off first?",
      options: ["To prevent the hot hydraulic fluid from being transferred to the YELLOW system", "To depressurize the YELLOW and GREEN systems.", "To prevent the BLUE system from pressurizing the GREEN system.", "To prevent the PTU from pressurizing the GREEN sys."],
      answer: 3
    },
    {
      id: 80,
      question: "What does the RAT MAN ON switch on HYD panel do?",
      options: ["Extends RAT, pressurizes BLUE system, Emergency Generator supplies AC ESS.", "Extends RAT, must push RAT MAN ON again to pressurize BLUE system.", "Extends RAT, pressurizes GREEN system, starts Emergency Generator.", "Extends RAT, pressurizes BLUE system, but Emergency Generator does not supply AC ESS."],
      answer: 3
    },
    {
      id: 81,
      question: "When does the Fault light illuminate on PTU push button?",
      options: ["During PTU operation, if PTU output pressure drops below 1450 psi", "If PTU does not operate with pressure difference between G & Y is more than 500 psi", "If G or Y system reservoir has a LO LVL or LOW AIR PRESS or OVHT warning", "All the above are correct"],
      answer: 2
    },
    {
      id: 82,
      question: "When the PTU is running, is there any exchange of fluid?",
      options: ["No, the PTU is a hydraulic motor turning a hydraulic pump. It exchanges only energy from one system to other.", "Yes, it transfers hydraulic fluid from Green System to Yellow System", "Yes, it transfers hydraulic fluid from Yellow System to Green System.", "In case of Lo Level in Yellow System, PTU will supply Green Hyd. fluid to Yellow."],
      answer: 0
    },
    {
      id: 83,
      question: "Does the RAT deploy automatically for any Hydraulic System failure?",
      options: ["YES, in case of Blue and Yellow Dual Hyd Sys Failure.", "YES, in case of Blue Hyd Sys Failure with Blue Elect Pump inop..", "NO, RAT does not deploy automatically due to any Hyd failure.", "RAT on A320 never deploys automatically"],
      answer: 2
    },
    {
      id: 84,
      question: "Just after any one engine start, how many Hyd. Systems are pressurized?",
      options: ["One.", "Two", "All the Three"],
      answer: 1
    },
    {
      id: 85,
      question: "What pressurizes the Yellow Hydraulic System?",
      options: ["EDP1", "Electric Pump or RAT", "EDP2 or PTU or, Electric Pump", "None of the above"],
      answer: 2
    },
    {
      id: 86,
      question: "Blue electric pump pb switch is in AUTO with AC power available. When will the pump be energized?",
      options: ["On ground, only after No. 2 engine is started", "On ground, only after No. 1 engine is started", "On ground, after any one engine is started", "None of the above"],
      answer: 2
    },
    {
      id: 87,
      question: "Can you recover any Hyd. System if it is lost due to LO LVL?",
      options: ["Yellow system can be recovered in approach only by electric pump.", "Green system can be recovered in approach but only by PTU", "Blue system can be recovered but by RAT extension", "No Hyd Sys can be recovered if it is lost due to LO LVL"],
      answer: 3
    }
  ]
}