import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
  title: "CPL - GENERAL NAV/ PERF 2",
  questions: [
    {
      id: 1,
      question: "Reduced take-off thrust:",
      options: [
        "is not recommended at very low temperatures (OAT)",
        "can be used if the actual take-off mass is higher than the performance limited take-off mass",
        "has the benefit of improving engine life",
        "can be used if the headwind component during take-off is at least 10 kt",
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "What is the effect of a negative runway slope?",
      options: ["V1 increases", "VR decreases", "VR increases", "V1 decreases"],
      answer: 3,
    },
    {
      id: 3,
      question:
        "Which of the following combinations will most likely cause the greatest increase in the takeoff distance? 1. Tailwind 2. Headwind 3. Upslope 4. Downslope 5. High temperature 6. Low Temperature",
      options: ["1, 4, 5", "2, 4, 5", "1, 3, 5", "2, 4, 6"],
      answer: 2,
    },
    {
      id: 4,
      question: "The clearway is defined as:",
      options: [
        "an area beyond the runway, not less than 500ft wide, centrally located about the extended centreline of the runway, and under the control of the airport authorities",
        "an area at the end of the stopway which can only be used in TODA calculations",
        "an area which must not exceed TODA by more than 15 percent",
        "a rectangular area 90 ft either side of the centreline on the ground at the end of the runway and in the direction of take-off",
      ],
      answer: 0,
    },
    {
      id: 5,
      question: "A runway is considered to be contaminated when:",
      options: [
        "more than 30% of the runway surface is covered by more than a 3 mm depth of water",
        "more than 25% of the runway surface is covered by more than a 3 mm depth of water",
        "more than 50% of the runway surface is covered by more than a 5 mm depth of water",
        "more than 25% of the runway surface is covered by more than a 2.5 mm depth of water",
      ],
      answer: 1,
    },
    {
      id: 6,
      question: "Clearway may not exceed:",
      options: ["150% ASDA", "50% TODA", "50% ASDA", "50% TORA"],
      answer: 3,
    },
    {
      id: 7,
      question: "Increase in ambient temperature will result in:",
      options: [
        "increase of climb limited mass",
        "increased obstacle limited mass",
        "increased field length limited mass",
        "decrease of maximum brake energy limited mass",
      ],
      answer: 3,
    },
    {
      id: 8,
      question:
        "If the value of the balanced V1 is found to be lower than VMCG, which of the following is correct?",
      options: [
        "The one engine out take-off distance will become greater than the ASDR",
        "The take-off is not permitted",
        "The VMCG will be lowered to V1",
        "The ASDR will become greater than the one engine out take-off distance",
      ],
      answer: 1,
    },
    {
      id: 9,
      question: "Which is the correct sequence of speeds during take-off?",
      options: ["VMCG, V1, VR, V2", "V1, VMCG, VR, V2", "V1, VR, V2, VMCA", "V1, VR, VMCG, V2"],
      answer: 0,
    },
    {
      id: 10,
      question: "The length of a clearway may be included in:",
      options: [
        "the distance to reach V1",
        "the accelerate-stop distance available",
        "the take-off distance available",
        "the take-off run available",
      ],
      answer: 2,
    },
    {
      id: 11,
      question:
        "Can the length of a stopway be added to the runway length to determine the take-off distance available?",
      options: [
        "Yes, but the stopway must have the same width as the runway",
        "No, unless its centreline is on the extended centreline of the runway",
        "No",
        "Yes, but the stopway must be able to carry the weight of the aeroplane",
      ],
      answer: 2,
    },
    {
      id: 12,
      question: "A higher outside air temperature (OAT):",
      options: [
        "decreases the brake energy limited take-off mass",
        "increases the climb limited take-off mass",
        "increases the field length limited take-off mass",
        "decreases the take-off distance",
      ],
      answer: 0,
    },
    {
      id: 13,
      question:
        "Which statement related to a take-off from a wet runway is correct?",
      options: [
        "The use of a reduced VR is sufficient to maintain the same safety margins as for a dry runway",
        "In case of a reverser inoperative the wet runway performance information can still be used",
        "A reduction of screen height is allowed in order to reduce weight penalties",
        "Screen height reduction can not be applied because of reduction in obstacle clearance",
      ],
      answer: 2,
    },
    {
      id: 14,
      question:
        "If the actual take off weight is higher than that recorded on the load sheet, what would the pilot be surprised by?",
      options: [
        "Higher unstick speed than expected",
        "Higher stick forces than expected",
        "Higher climb gradient than expected",
        "Higher V1 than expected",
      ],
      answer: 0,
    },
    {
      id: 15,
      question: "Take-off run is defined as the:",
      options: [
        "distance to 35 feet with an engine failure at V1 or 115% all engine distance to 35 feet",
        "Distance from brake release to V2",
        "horizontal distance along the take-off path from the start of the take-off to a point equidistant between the point at which VLOF is reached and the point at which the aeroplane is 35 ft above the take-off surface",
        "distance to V1 and stop, assuming an engine failure at V1",
      ],
      answer: 2,
    },
    {
      id: 16,
      question: "The TODA is:",
      options: [
        "declared runway length plus stopway",
        "declared runway length only",
        "declared runway length plus clearway and stopway",
        "declared runway length plus clearway",
      ],
      answer: 3,
    },
    {
      id: 17,
      question: "A reduction in air density causes:",
      options: [
        "An increase in CL",
        "A decrease in take-off distance",
        "An increase in take-off distance",
        "A decrease in CL",
      ],
      answer: 2,
    },
    {
      id: 18,
      question: "Which statement regarding V1 is correct?",
      options: [
        "VR may not be lower than V1",
        "The correction for up-slope on the balanced V1 is negative",
        "V1 may not be higher than Vmcg",
        "When determining V1, reverse thrust may only be used on the remaining symmetric engines",
      ],
      answer: 1,
    },
    {
      id: 19,
      question: "Which of the following answers is true?",
      options: ["V1 > VR", "V1 >Vlof", "V1 <= VR", "V1 < VMCG"],
      answer: 2,
    },
    {
      id: 20,
      question:
        "During the take-off run the thrust of a jet engine:",
      options: [
        "ls increased due to increasing intake ram temperature rise",
        "ls decreased due to ram effect",
        "ls increased due to intake momentum drag",
        "ls decreased due to reducing difference between jet velocity and aircraft velocity",
      ],
      answer: 3,
    },
    {
      id: 21,
      question:
        "In which of the following distances can the length of a stopway be included?",
      options: [
        "In the take-off run available",
        "In the accelerate stop distance available",
        "In the one-engine failure case, take-off distance",
        "In the all-engine take-off distance",
      ],
      answer: 1,
    },
    {
      id: 22,
      question:
        "During aircraft certification, the value of VMCG is found with nose wheel steering inoperative. This is because:",
      options: [
        "nose wheel steering does not affect VMCG",
        "the aircraft may be operated even if the nose wheel steering is inoperative",
        "VMCG must be valid in both wet and dry conditions",
        "nose wheel steering does not work after an engine failure",
      ],
      answer: 2,
    },
    {
      id: 23,
      question:
        "At the same aircraft mass if a higher V1 was used then...",
      options: [
        "TODR will decrease and ASDR increase",
        "TODR and ASDR will increase",
        "TODR will be unaffected and ASDR will increase",
        "TODR will increase and ASDR decrease",
      ],
      answer: 0,
    },
    {
      id: 24,
      question: "A balanced field length occurs when:",
      options: [
        "VGO = VSTOP = V1",
        "the take-off distance and half the clearway equals ASDA",
        "the distance to accelerate to V1 and the distance to stop are identical",
        "ASDA equals TODA",
      ],
      answer: 3,
    },
    {
      id: 25,
      question: "The semi-width of the stopway is:",
      options: ["60m", "90m", "no less than the associated runway", "75m"],
      answer: 2,
    },
    {
      id: 26,
      question:
        "If the aerodrome pressure altitude increases, VR... and Vlof...",
      options: [
        "decreases, increases",
        "decreases, decreases",
        "increases, increases",
        "increases, decreases",
      ],
      answer: 2,
    },
    {
      id: 27,
      question:
        "The maximum reduction in thrust permitted, when performing a reduced thrust take-off, is... percent of that required for a normal take-off",
      options: ["30", "25", "15", "50"],
      answer: 1,
    },
    {
      id: 28,
      question: "A balanced field exists if:",
      options: ["TODA = ASDA", "TORA = EDA", "TODA is greater than EDA", "TORA = TODA"],
      answer: 0,
    },
    {
      id: 29,
      question:
        "At an airfield which has a high absolute humidity compared to an airfield with low absolute humidity:",
      options: [
        "the aircraft will produce more thrust because mass flow is increased",
        "the aircraft will produce less thrust because the density is reduced",
        "the thrust will not be affected",
        "the aircraft will produce more thrust because the water vapour cools the engines",
      ],
      answer: 1,
    },
    {
      id: 30,
      question:
        "The balanced field length for an aircraft is when, in the event of an engine failure during take-off:",
      options: [
        "the take-off run required is equal to the accelerate-stop-distance required",
        "the distance to accelerate is equal to the distance to stop",
        "the take-off distance required is equal to the accelerate-stop-distance required",
        "the take-off distance required is equal to the take-off run required",
      ],
      answer: 2,
    },
    {
      id: 31,
      question: "Requirements for the third segment of climb are:",
      options: [
        "there is no climb gradient requirement during acceleration phase",
        "level acceleration with an equivalent gradient of 1.2%",
        "legal minimum altitude for acceleration is 1500'",
        "minimum acceleration altitude for one engine inoperative should be used",
      ],
      answer: 0,
    },
    {
      id: 32,
      question:
        "The Net Take-off Flight Path terminates when the aeroplane attains a height above reference zero of:",
      options: ["1500 ft net", "1200 ft net", "1500 ft gross", "1200 ft gross"],
      answer: 0,
    },
    {
      id: 33,
      question: "The first segment of the take-off flight path ends:",
      options: [
        "at completion of gear retraction",
        "at reaching V2",
        "at 35 ft above the runway",
        "at completion of flap retraction",
      ],
      answer: 0,
    },
    {
      id: 34,
      question: "In the second segment during take off, flap and gear are:",
      options: [
        "Flap up/gear down",
        "Flap up/retracted",
        "Flap2/retracting",
        "TKOF position/ retracted",
      ],
      answer: 3,
    },
    {
      id: 35,
      question:
        "What is the minimum height to fly level at the beginning of the third segment?",
      options: ["1500 ft", "On reaching flap retraction speed", "After gear up", "400 ft"],
      answer: 3,
    },
    {
      id: 36,
      question:
        "The net flight path climb gradient after take-off compared to the gross climb gradient is:",
      options: [
        "depends on type of aircraft",
        "equal",
        "smaller",
        "larger",
      ],
      answer: 2,
    },
    {
      id: 37,
      question:
        "The net take-off flight path gradient for a 2 engine aircraft is the gross gradient reduced by:",
      options: ["0.8 percent", "1.43 percent", "0.9 percent", "0.7 percent"],
      answer: 0,
    },
    {
      id: 38,
      question: "The scheduled landing distance required is the distance:",
      options: [
        "A) From a screen of a designated height to the point at which the aircraft has come to a complete stop",
        "B) From touchdown to the point at which the aircraft has come to a complete stop.",
        "C) From touchdown to the point at which the aircraft has decelerated to a speed of 20kts",
        "D) From the point at which the aircraft is 50 metres above the runway to the point at which the aircraft has come to a complete stop.",
      ],
      answer: 0,
    },
    {
      id: 39,
      question: "Which of the following statements is correct?",
      options: [
        "A) Gross acceleration is net acceleration minus 9.81m/s2",
        "B) Gross landing distance is greater than net landing distance",
        "C) Gross gradient is less than net gradient",
        ". D) Gross take-off distance is less than net take-off distance",
      ],
      answer: 3,
    },
    {
      id: 40,
      question: "The rate of climb:",
      options: [
        "A) Is the horizontal component of the true airspeed",
        "B) Is approximately climb gradient times true airspeed divided by 100",
        "C) Is angle of climb times true airspeed",
        "D) Is the downhill component of the true airspeed",
      ],
      answer: 1,
    },
    {
      id: 41,
      question: "Gross performance is:",
      options: [
        "A) The minimum performance which a fleet of aeroplanes should achieve if satisfactorily maintained and flown in accordance with the techniques described in the manual",
        "B) 65 percent of net performance",
        "C) The average performance which a fleet of aeroplanes should achieve if satisfactorily maintained and flown in accordance with the techniques described in the manua",
        "D) The maximum performance which a fleet of aeroplanes should achieve if satisfactorily maintained and flown in accordance with the techniques described in the manual",
      ],
      answer: 2,
    },
    {
      id: 42,
      question: "Density altitude is the:",
      options: [
        "A) Height above the surface.",
        "B) Pressure altitude corrected for 'non standard' temperature",
        "C) Altitude reference to the standard datum plane",
        "D) Altitude read directly from the altimeter",
      ],
      answer: 1,
    },
    {
      id: 43,
      question:
        "Under what condition is pressure altitude and density altitude the same value?",
      options: [
        "A) At standard temperature",
        "B) When the altimeter setting is 1013\" Hg",
        "C) When the altimeter setting is 29.92\" Hg",
        "D) When indicated, and pressure altitudes are the same value on the altimeter",
      ],
      answer: 0,
    },
    {
      id: 44,
      question: "Pressure altitude is:",
      options: [
        "A) The altimeter indication when QFE is set on the sub-scale",
        "B) The altimeter indication when 1013.25 Hpa is set on the sub-scale.",
        "C) The altitude above sea level",
        "D) The altimeter indication when QNH is set on the sub-scale.",
      ],
      answer: 1,
    },
    {
      id: 45,
      question: "The 'climb gradient' is defined as the ratio of::",
      options: [
        "A) The increase of altitude to horizontal air distance expressed as a percentag",
        "B) The increase of altitude to distance over ground expressed as a percentage.",
        "C) Rate of climb to true airspeed",
        "D) True airspeed to rate of climb",
      ],
      answer: 0,
    },
    {
      id: 46,
      question: "The absolute ceiling is defined as::",
      options: [
        "A) The outer boundary of our galaxy",
        "B) The altitude where the maximum rate of climb is 0 ft/minute",
        "C) The altitude where the rate of climb is maximum",
        "D) The altitude where a certain maximum rate of climb (e.g. 100 ft/min) is attained",
      ],
      answer: 1,
    },
    {
      id: 47,
      question: "The C of G is:",
      options: [
        "A) The point on the aircraft through which gravity appears to act",
        "B) The point on the aircraft where the lift acts through",
        "C) The point on the aircraft from where the dihedral angle is measured",
        "D) The point on the aircraft where the datum is located",
      ],
      answer: 0,
    },
    {
      id: 48,
      question: "The Density Altitude:",
      options: [
        "A) is used to establish minimum clearance of 2.000 feet over mountains",
        "B) is used to determine the aeroplane performance",
        "C) is equal to the pressure altitude",
        "D) is used to calculate the FL above the Transition Altitude",
      ],
      answer: 1,
    },
    {
      id: 49,
      question: "An upward runway slope:",
      options: [
        "A) decreases the take-off distance required",
        "B) decreases the accelerated-stop-distance available",
        "C) increases the take-off distance required",
        "D) increases the accelerated-stop-distance available",
      ],
      answer: 2,
    },
    {
      id: 50,
      question:
        "The effect of increased weight on a glide descent in a normal atmosphere is:",
      options: [
        "A) Forward speed increases, rate of descent decreases",
        "B) Forward speed decreased, rate of descent increases",
        "C) Forward speed decreased, rate of descent decreases",
        "D) Forward speed increases, rate of descent increases",
      ],
      answer: 3,
    },
    {
      id: 51,
      question:
        "The landing distance required will be increased as a result of all of the following:",
      options: [
        "A) increased temperature, increased pressure altitude, uphill runway slope",
        "B) increased temperature, decreased pressure altitude, downhill runway slope",
        "C) decreased temperature, decreased pressure altitude, uphill runway slope",
        "D) increased temperature, increased pressure altitude, downhill runway slope",
      ],
      answer: 3,
    },
    {
      id: 52,
      question:
        "What percentages of the headwind and tailwind components are taken into account when calculating the take- off field length required?",
      options: [
        "A) 50% headwind and 150% tailwind",
        "B) 100% headwind and 100% tailwind",
        "C) 50% headwind and 100% tailwind",
        "D) 150% headwind and 50% tailwind",
      ],
      answer: 0,
    },
    {
      id: 53,
      question:
        "If there is an increase in atmospheric pressure and all other factors remain constant, it should result in:",
      options: [
        "A) decreased take off distance and increased climb performance",
        "B) decreased take off distance and decreased climb performance",
        "C) increased take off distance and decreased climb performance",
        "D) increased take off distance and increased climb performance",
      ],
      answer: 0,
    },
    {
      id: 54,
      question: "When an aircraft reaches its service ceiling:",
      options: [
        "A) The lift will be insufficient to support the weight",
        "B) It will have a small positive rate of climb",
        "C) The excess power will be zero",
        "D) The rate of climb will be zero",
      ],
      answer: 1,
    },
    {
      id: 55,
      question:
        "Which condition would cause the altimeter to indicate a lower altitude than actually flown (true altitude)?",
      options: [
        "A) An altimeter always indicates the true altitude",
        "B) Air temperature lower than standard",
        "C) Air temperature warmer than standard",
        "D) Atmospheric pressure lower than standard",
      ],
      answer: 2,
    },
    {
      id: 56,
      question:
        "Given that: VEF = Critical engine failure speed VMCG = Ground minimum control speed VMCA = Air minimum control speed VMU = Minimum unstick speed V1= Take-off decision speed VR= Rotation speed V2 min. = Minimum take-off safety speed The correct formula is:",
      options: [
        "A) VMCG <= VEF < V1",
        "B) 1.05 VMCA <= VEF <= V1.",
        "C) V2 min <= VEF <= VMU",
        "D) 1.05 VMCG < VEF <= VR",
      ],
      answer: 0,
    },
    {
      id: 57,
      question: "The Clearway at an aerodrome is an area beginning :",
      options: [
        "A) at the end of the runway, clear of obstacles and capable of supporting the weight of the aircraft during an emergency stop",
        "B) at the end of the runway, with a minimum width of 60 m each side of the centre line and clear of obstacles",
        "C) at the end of the stopway, with a width equal to the runway width, and clear of obstacles",
        "D) at the end of the runway, having a minimum required width, disposed equally about the extended centre line, with no obstacles protruding above a plane sloping upwards with a slope of 1.25%",
      ],
      answer: 3,
    },
    {
      id: 58,
      question:
        "Minimum control speed on ground, VMCG, is based on directional control being maintained by",
      options: [
        "A) primary aerodynamic control and nosewheel",
        "B) primary aerodynamic control only",
        "C) nosewheel steering only",
        "D) primary aerodynamic control, nosewheel steering and differential braking",
      ],
      answer: 1,
    },
    {
      id: 59,
      question:
        "An aircraft is climbing as a constant Mach number in ISA conditions. Above the tropopause :",
      options: [
        "the IAS decreases, the TAS decreases",
        "the IAS is constant, the TAS increases",
        "the IAS is constant, the TAS is constant",
        "the IAS decreases, the TAS is constant",
      ],
      answer: 3,
    },
    {
      id: 60,
      question:
        "A jet aeroplane is climbing with constant IAS. Which operational speed limit is most likely to be reached?",
      options: [
        "The Minimum control speed air",
        "The Mach limit for the Mach trim system",
        "The Maximum operating Mach number",
        "The Stalling speed",
      ],
      answer: 2,
    },
    {
      id: 61,
      question:
        "In a constant Mach number climb, how does True Airspeed vary?",
      options: [
        "Remains constant",
        "Decreases",
        "Increases",
        "Increases then decreases",
      ],
      answer: 1,
    },
    {
      id: 62,
      question:
        "Vmca is defined as the minimum speed at which directional control can be maintained in flight with an engine failure in a defined configuration which include:",
      options: [
        "flaps in landing position",
        "zero yaw",
        "0° bank",
        "Landing gear down",
      ],
      answer: 1,
    },
    {
      id: 63,
      question: "How does the long range cruise speed change?",
      options: [
        "LRC Mach number decreases with increasing altitude",
        "LRC Mach number decreases with decreasing altitude",
        "LRC Indicated airspeed increases with increasing altitude",
        "LRC True airspeed decreases with increasing altitude",
      ],
      answer: 1,
    },
    {
      id: 64,
      question: "Long range cruise is a flight procedure which gives:",
      options: [
        "a specific range which is 99% of maximum specific range and a lower cruise speed",
        "a specific range which is about 99% of maximum specific range and higher cruise speed",
        "an IAS which is 1% higher than the IAS for maximum specific range",
        "a 1% higher TAS for maximum specific range",
      ],
      answer: 1,
    },
    {
      id: 65,
      question: "What is a COST INDEX?",
      options: [
        "A number denoting the cost per nautical mile",
        "A number denoting the ratio of the cost of fuel to speed",
        "A number denoting the ratio of direct operating costs to speed",
        "A number denoting the ratio of the costs of crew and maintenance to the cost of fuel",
      ],
      answer: 3,
    },
    {
      id: 66,
      question:
        "Under which condition should you fly considerably lower (4000 ft or more) than the optimum altitude?",
      options: [
        "If at the lower altitude either considerably less headwind or considerably more tailwind can be expected",
        "If the temperature is lower at the low altitude (high altitude inversion)",
        "If at the lower altitude either more headwind or less tailwind can be expected",
        "If the maximum altitude is below the optimum altitude",
      ],
      answer: 0,
    },
    {
      id: 67,
      question: "Endurance for a jet aircraft is a maximum:",
      options: [
        "at low altitude, and decreases with increasing aircraft mass",
        "at low altitude, and increases with increasing aircraft mass",
        "at high altitude, and increases with increasing aircraft mass",
        "at high altitude, and decreases with increasing aircraft mass",
      ],
      answer: 3,
    },
    {
      id: 68,
      question:
        "For a jet engine aeroplane, the long range cruise speed is:",
      options: [
        "greater than maximum range speed",
        "equal to the maximum endurance speed",
        "less than maximum range speed",
        "equal to the maximum range speed",
      ],
      answer: 0,
    },
    {
      id: 69,
      question:
        "What is the effect of the centre of gravity on fuel consumption?",
      options: [
        "The centre of gravity has no effect on fuel consumption",
        "The further aft the centre of gravity the greater the fuel consumption compared to an aircraft with a forward centre of gravity",
        "The further the distance of the centre of gravity from the centre of pressure the greater the fuel consumption",
        "The further forward the centre of gravity the greater the fuel consumption compared to an aircraft with an aftcentre of gravity",
      ],
      answer: 3,
    },
    {
      id: 70,
      question:
        "For a given flight level the speed range determined by the buffet onset boundary will decrease with:",
      options: [
        "reduced weight",
        "reduced bank angle",
        "with increased temperature",
        "with a more forward centre of gravity",
      ],
      answer: 3,
    },
    {
      id: 71,
      question: "Long range cruise is selected as:",
      options: [
        "specific range with tailwind.",
        "the climbing cruise with one or two engines inoperative.",
        "the speed for best economy.",
        "the higher speed to achieve 99% of maximum specific range in zero wind.",
      ],
      answer: 3,
    },
    {
      id: 72,
      question: "Equivalent airspeed is equal to:",
      options: [
        "the calibrated airspeed corrected for density error",
        "the calibrated airspeed corrected for instrument error",
        "the calibrated airspeed corrected for residual compressibility effects",
        "the indicated airspeed corrected for instrument and density error",
      ],
      answer: 2,
    },
    {
      id: 73,
      question: "21. The service ceiling of an aircraft is defined as:",
      options: [
        "the altitude where the basic stalling speed is equal to the critical Mach number",
        "the altitude above which cruising speed cannot be maintained",
        "the altitude where a specified rate of climb (e.g. 100ft/min) is still achievable",
        "the altitude where rate of climb becomes zero",
      ],
      answer: 2,
    },
    {
      id: 74,
      question: "At speeds below minimum drag:",
      options: [
        "a lower speed requires a higher thrust",
        "the aeroplanecan not be controlled manually",
        "a higher speed requires a higher thrust",
        "the aeroplane can be controlled only in level flight",
      ],
      answer: 0,
    },
    {
      id: 75,
      question:
        "Which of the jet engine ratings below is not a certified rating?",
      options: [
        "Maximum Take-off Thrust",
        "Maximum Cruise Thrust",
        "Go-Around Thrust",
        "Maximum Continuous Thrust",
      ],
      answer: 1,
    },
    {
      id: 76,
      question: "Which of the equations below defines specific range (SR)?",
      options: [
        "SR = Mach Number/Total Fuel Flow",
        "SR = Groundspeed/Total Fuel Flow",
        "SR = True Airspeed/Total Fuel Flow",
        "SR = Indicated Airspeed/Total Fuel Flow",
      ],
      answer: 2,
    },
    {
      id: 77,
      question:
        "For a jet engine powered airplane which of the following corresponds to the speed for best L/D?",
      options: ["VNO", "VLO", "Speed for best range", "Speed for best endurance"],
      answer: 3,
    },
    {
      id: 78,
      question:
        "The centre of gravity near, but still within, the aft limit:",
      options: [
        "improves the longitudinal stability.",
        "increases the stalling speed",
        "decreases the maximum range",
        "improves the maximum range",
      ],
      answer: 3,
    },
    {
      id: 79,
      question:
        "Why are STEP CLIMBS used on long distance flights?",
      options: [
        "Step climbs are only justified if at the higher altitude less headwind or more tailwind can be expected",
        "Step climbs do not have any special purpose for jet aeroplanes; they are used for piston engine aeroplanes only",
        "To respect ATC flight level constraints",
        "To fly as close as possible to the optimum altitude as aeroplane mass reduces",
      ],
      answer: 3,
    },
    {
      id: 80,
      question:
        "With all other things remaining unchanged and with T the outside static air temperature expressed in degrees K, the hourly fuel consumption of a turbojet powered aeroplane in a cruise flight with a constant Mach Number and zero headwind, is as follows:",
      options: [
        "proportional to T",
        "proportional to 1/T",
        "proportional to 1/T2",
        "independent from T",
      ],
      answer: 0,
    },
    {
      id: 81,
      question: "The speed for maximum endurance:",
      options: [
        "is the lower speed to achieve 99% of maximum specific range",
        "can either be lower or higher than the speed for maximum specific range",
        "is always lower than the speed for maximum specific range",
        "is always higher than the speed for maximum specific range",
      ],
      answer: 2,
    },
    {
      id: 82,
      question:
        "The Specific Fuel Consumption (SFC) for a jet engine is:",
      options: [
        "the thrust produced per kilogram of fuel used",
        "the miles flown per kilogram fuel used.",
        "the fuel flow per unit of thrust",
        "the fuel flow at maximum take-off thrust",
      ],
      answer: 2,
    },
    {
      id: 83,
      question: "The speed for long range cruise is:",
      options: [
        "less than or equal to endurance speed",
        "less than maximum range speed",
        "greater than maximum range speed",
        "equal to maximum range speed",
      ],
      answer: 2,
    },
  ],
};