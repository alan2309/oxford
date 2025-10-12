import type { ExamData } from "../../exam-data";

export const examData: ExamData = {
    title: "Pressurization Systems",
    questions: [
        {
            "id": 1,
            "question": "Main and nose wheel bays are:",
            "options": [
                "pressurized",
                "unpressurized",
                "conditioned",
                "different, with the mains being unpressurized and the nose pressurized"
            ],
            "answer": 1
        },
        {
            "id": 2,
            "question": "Normal maximum negative differential pressure is:",
            "options": [
                "when atmospheric pressure exceeds cabin pressure by the amount permitted by the system controls",
                "where the cabin pressure falls below aircraft altitude pressure at which time the inward relief valve opens",
                "when the cabin pressure exceeds the atmospheric pressure by 0.5 psi",
                "the pressure at which the duct relief valve is set to operate"
            ],
            "answer": 0
        },
        {
            "id": 3,
            "question": "When would the negative differential limit be reached/exceeded?",
            "options": [
                "Rapid descent when AC descends below cabin altitude",
                "During ground pressure testing",
                "Rapid ascent when aircraft climbs",
                "When changing to manual operation"
            ],
            "answer": 0
        },
        {
            "id": 4,
            "question": "A/C in level flight: if cabin altitude increases, pressure diff:",
            "options": [
                "increases",
                "decreases",
                "remains the same",
                "nil"
            ],
            "answer": 1
        },
        {
            "id": 5,
            "question": "In level pressurized flight what does the outflow valve do?",
            "options": [
                "Close",
                "Adjust to provide constant flow, and is normally partially open",
                "Open to increase air conditioning",
                "Adjust to provide maximum flow, and is normally almost closed"
            ],
            "answer": 1
        },
        {
            "id": 6,
            "question": "In a turbo-compressor or bootstrap system the cooling air is:",
            "options": [
                "ram air",
                "engine by pass air",
                "cabin air",
                "compressor air"
            ],
            "answer": 0
        },
        {
            "id": 7,
            "question": "The rate of change of cabin pressure should be kept to the minimum. This is more important:",
            "options": [
                "in descent",
                "in climb",
                "in periods when the dehumidifier is in use",
                "in cruise"
            ],
            "answer": 0
        },
        {
            "id": 8,
            "question": "A cabin humidifier is used:",
            "options": [
                "on the ground in conditions of low relative humidity",
                "at high altitude",
                "at low altitude",
                "on the ground in high ambient temperatures"
            ],
            "answer": 1
        },
        {
            "id": 9,
            "question": "Fatigue life of the fuselage is based on the:",
            "options": [
                "number of pressurization cycles",
                "number of explosive decompressions",
                "number of landings only",
                "number of cycles at maximum differential"
            ],
            "answer": 0
        },
        {
            "id": 10,
            "question": "If the forward oil seal in an axial flow compressor fails, cabin air will be:",
            "options": [
                "contaminated",
                "unaffected",
                "'b' is only correct if synthetic oil is used",
                "'a' will be correct only if the aircraft is inverted"
            ],
            "answer": 0
        },
        {
            "id": 11,
            "question": "Rate of change of cabin altitude is shown on a:",
            "options": [
                "special gauge",
                "aircraft VSI",
                "cabin pressure controller",
                "gauge reading a percentage of Max Diff Pressure"
            ],
            "answer": 0
        },
        {
            "id": 12,
            "question": "Cabin discharge valve (pneumatic) is supplied with:",
            "options": [
                "air data computer output information",
                "cabin and static pressure",
                "cabin pressure, static and air speed information",
                "cabin pressure only"
            ],
            "answer": 1
        },
        {
            "id": 13,
            "question": "What is the purpose of the duct relief valve?",
            "options": [
                "To protect the undercarriage bay",
                "To ensure the compressor pressure is regulated",
                "To prevent damage to the ducts",
                "To relieve excess pressure to compressor return line"
            ],
            "answer": 2
        },
        {
            "id": 14,
            "question": "What system is installed to control the air conditioning?",
            "options": [
                "Emulsifier and water extractor",
                "Impingement type dehydrator and humidifier",
                "Dehydrator only",
                "Humidifier only"
            ],
            "answer": 1
        },
        {
            "id": 15,
            "question": "How is the (charge) air cooled in a bootstrap (turbo-compressor) system?",
            "options": [
                "By expanding over turbine",
                "By expanding over turbine driving compressor",
                "Via an air cooled radiator",
                "By passing it through the fuel heater"
            ],
            "answer": 1
        },
        {
            "id": 16,
            "question": "At the max differential phase, the discharge phase is:",
            "options": [
                "open",
                "closed",
                "under the control of the rate capsule",
                "partly open"
            ],
            "answer": 0
        },
        {
            "id": 17,
            "question": "What is the purpose of inward relief valves?",
            "options": [
                "To prevent negative differential",
                "To back up the duct relief valve",
                "To allow positive pressure to be bled off in an emergency",
                "To back up the outflow valve"
            ],
            "answer": 0
        },
        {
            "id": 18,
            "question": "On a ground pressurization test, if the cabin suffers a rapid de-pressurization:",
            "options": [
                "the temperature will rise suddenly",
                "water precipitation will occur",
                "damage to hull may occur",
                "duct relief valve may jam open"
            ],
            "answer": 1
        },
        {
            "id": 19,
            "question": "A heat exchanger functions by:",
            "options": [
                "combining ram and charge air",
                "mixing the various vapours inside the heat exchanger",
                "passing charge air through ducts and cool air around ducts",
                "removing the static charge"
            ],
            "answer": 2
        },
        {
            "id": 20,
            "question": "Maximum differential pressure:",
            "options": [
                "is the maximum authorized pressure difference between the inside of the fuselage and the atmospheric ambient pressure",
                "is the absolute pressure provided by the vacuum pump",
                "is the pressure loss over a given time limit",
                "is the absolute pressure the cabin pressure ducting is designed to carry"
            ],
            "answer": 0
        },
        {
            "id": 21,
            "question": "A humidifier is fitted to:",
            "options": [
                "extract the moisture content in the air",
                "filter the air",
                "increase the moisture content in the air when operating at high altitude",
                "to ensure the cabin air is saturated at high altitude"
            ],
            "answer": 2
        },
        {
            "id": 22,
            "question": "If the discharge or outflow valve closes:",
            "options": [
                "the duct relief valve will take control",
                "the inward relief valve would assume control",
                "the safety valve would limit the positive pressure difference",
                "the safety relief valve would limit the negative pressure difference"
            ],
            "answer": 2
        },
        {
            "id": 23,
            "question": "Air for conditioning and pressurization is taken from:",
            "options": [
                "the engine compressor or cabin compressor",
                "the engine by pass duct or thrust reverse by pass duct",
                "the engine compressor or ram turbine",
                "the engine turbine or cabin compressor"
            ],
            "answer": 0
        },
        {
            "id": 24,
            "question": "Safety valves are biased:",
            "options": [
                "inwards",
                "outwards",
                "in the direction sensed by the SVC",
                "neither a nor b"
            ],
            "answer": 0
        },
        {
            "id": 25,
            "question": "Cabin compressors:",
            "options": [
                "increase their flow in cruise conditions",
                "decrease their flow in cruise conditions",
                "increase their flow in proportion to increases of altitude differential pressure and reduction in engine rpm in order to maintain the mass flow",
                "deliver minimum air at sea level via the cold air unit"
            ],
            "answer": 2
        },
        {
            "id": 26,
            "question": "In a pressurization circuit the sequence of operation is for the:",
            "options": [
                "inward relief valve to open before the safety valve",
                "outflow valve to operate before the safety valve",
                "outflow valve to operate after the safety valve",
                "outflow valve to operate the same time as the safety valve"
            ],
            "answer": 1
        },
        {
            "id": 27,
            "question": "In the cruise at 30 000 ft the cabin altitude is adjusted from 4000 ft to 6000 ft:",
            "options": [
                "cabin differential will increase",
                "cabin differential will not be affected",
                "cabin differential will decrease",
                "nil"
            ],
            "answer": 2
        },
        {
            "id": 28,
            "question": "An aircraft climbs from sea level to 16 000 ft at 1000 ft per min, the cabin pressurization is set to climb at 500 ft per min to a cabin altitude of 8000 ft. The time taken for the cabin to reach 8000 ft is:",
            "options": [
                "the same time as it takes the aircraft to reach 16 000 ft",
                "half the time it takes the aircraft to reach 16 000 ft",
                "twice the time it takes the aircraft to reach 16 000 ft",
                "three times the time it takes the aircraft to reach 16 000 ft"
            ],
            "answer": 0
        },
        {
            "id": 29,
            "question": "The aircraft inhibiting switch connected to the A/C landing gear:",
            "options": [
                "allows the aircraft to be pressurized on the ground",
                "stops pressurizing on the ground and ensures that there is no significant pressure differential",
                "ensures that the discharge valve is closed",
                "cancels out the safety valve on the ground"
            ],
            "answer": 1
        },
        {
            "id": 30,
            "question": "Negative differential is limited by:",
            "options": [
                "dump valve",
                "inward relief valve",
                "outflow valve",
                "safety valve"
            ],
            "answer": 1
        },
        {
            "id": 31,
            "question": "To maintain a steady and constant airflow regardless of altitude or cabin pressure:",
            "options": [
                "a duct relief valve is fitted",
                "a venturi device is fitted",
                "a mass flow controller is fitted",
                "a thermostatic relief valve is fitted"
            ],
            "answer": 2
        },
        {
            "id": 32,
            "question": "The term 'pressurization cycle' means:",
            "options": [
                "air introduced into a fuselage under pressure only",
                "air introduced into a fuselage under pressure until the time the air is released",
                "air discharged from the fuselage, above 15 psi",
                "the frequency in Hz the pressure cycles from the rootes blowers enter the fuselage"
            ],
            "answer": 1
        },
        {
            "id": 33,
            "question": "Inward Relief Valves operate:",
            "options": [
                "in conjunction with the cabin pressure controller when there is a negative diff",
                "in conjunction with the cabin altitude selector when there is negative diff",
                "when manually selected during the emergency descent procedure",
                "automatically when there is a negative diff"
            ],
            "answer": 3
        },
        {
            "id": 34,
            "question": "Safety valves operate:",
            "options": [
                "at higher than maximum differential",
                "as soon as initiation takes place",
                "at a lower diff than a discharge valve",
                "at a set value, which is selected"
            ],
            "answer": 0
        },
        {
            "id": 35,
            "question": "Ditching Cocks are operated:",
            "options": [
                "automatically when the soluble plugs dissolve",
                "to shut all outflow valves",
                "to direct pressure into flotation bags",
                "for rapid depressurization"
            ],
            "answer": 1
        },
        {
            "id": 36,
            "question": "Duct Relief Valves operate when:",
            "options": [
                "excessive pressure builds up in the air conditioning system supply ducts",
                "to keep cabin pressure close to ambient pressure",
                "to prevent the floor from collapsing should baggage door open",
                "the cooling modulator shutters reach the optimized position"
            ],
            "answer": 0
        },
        {
            "id": 37,
            "question": "During a normal pressurized cruise, the discharge valve position is:",
            "options": [
                "at a position pre-set before take-off",
                "partially open",
                "open until selected altitude is reached",
                "closed until selected altitude is reached"
            ],
            "answer": 1
        },
        {
            "id": 38,
            "question": "A dump valve:",
            "options": [
                "automatically opens when fuel is dumped",
                "is controlled manually",
                "is opened automatically when the safety valve opens",
                "is controlled by the safety valve integrating line"
            ],
            "answer": 1
        },
        {
            "id": 39,
            "question": "When air is pressurized the % of oxygen:",
            "options": [
                "increases",
                "decreases",
                "remains the same",
                "nil"
            ],
            "answer": 2
        },
        {
            "id": 40,
            "question": "If pressure is manually controlled:",
            "options": [
                "an extra member is required to monitor system operation",
                "the climb rate would be maintained automatically",
                "climb rate could not be maintained",
                "care should be taken to ensure climb/descent rates are safe"
            ],
            "answer": 3
        },
        {
            "id": 41,
            "question": "An aircraft is prevented from pressurizing on the ground by:",
            "options": [
                "the auto deflating valve on the main oleos",
                "inhibiting microswitches on the landing gear",
                "inhibiting microswitches on the throttles",
                "the pressure control master switch"
            ],
            "answer": 1
        },
        {
            "id": 42,
            "question": "If the pressurization air is passed over the cold air unit compressor it:",
            "options": [
                "increases the charge air temperature",
                "decreases the charge air temperature",
                "decreases the charge air pressure",
                "makes no change to the charge air condition"
            ],
            "answer": 0
        },
        {
            "id": 43,
            "question": "If the cabin pressure increases in level flight does the cabin VSI shows:",
            "options": [
                "rate of climb",
                "no change unless the aircraft climbs",
                "rate of descent",
                "nil"
            ],
            "answer": 2
        },
        {
            "id": 44,
            "question": "The term pressure cabin is used to describe:",
            "options": [
                "pressurization of the flight deck only",
                "the ability to pressurise the aircraft to a higher than ambient pressure",
                "the passenger cabin on an airliner",
                "the ability to maintain a constant pressure differential at all altitudes"
            ],
            "answer": 1
        },
        {
            "id": 45,
            "question": "A pressurization system works by:",
            "options": [
                "essentially constant input mass flow and variable output",
                "essentially constant output mass flow and variable input",
                "does not start until an altitude of 8000 ft has been reached",
                "supplying hot gases from the engine exhaust unit to the mass flow control system"
            ],
            "answer": 0
        },
        {
            "id": 46,
            "question": "When air is pressurized by an engine driven compressor, it is also:",
            "options": [
                "moisturized",
                "heated",
                "cooled",
                "the temperature is not affected"
            ],
            "answer": 1
        }
    ]
}