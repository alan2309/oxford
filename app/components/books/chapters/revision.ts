import type { ExamData } from "../../exam-data";
export const examData: ExamData = {
  title: "Revision",
  questions: [
    {
      id: 1,
      question: "A unit of measurement of pressure is:",
      options: [
        "kg/square dm.",
        "kg/cubic metre.",
        "newtons.",
        "psi.",
      ],
      answer: 3
    },
    {
      id: 2,
      question: "Which of the following are the correct SI units?",
      options: [
        "Density is kilograms per cubic metre,  force is newtons.",
        "Density is newtons per cubic metre, force is kilograms.",
        "Density is kilograms per newton, force is newton-metre squared.",
        "Density is kilograms per square metre, force is kilograms.",
      ],
      answer: 0
    },
    {
      id: 3,
      question: "What is the SI unit of density?",
      options: [
        "m V squared.",
        "kg/square cm.",
        "kg - metres.",
        "kg/cubic metre.",
      ],
      answer: 3
    },
    {
      id: 4,
      question: "What is the SI unit which results from multiplying kg and m/s squared?",
      options: [
        "Newton.",
        "Psi.",
        "Joule.",
        "Watt.",
      ],
      answer: 0
    },
    {
      id: 5,
      question: "Which of the following expressions is correct?",
      options: [
        "A = F × M",
        "F = M × A",
        "M = F × A",
        "A = M / F",
      ],
      answer: 1
    },
    {
      id: 6,
      question: "Which of the following is the equation for power?",
      options: [
        "N/m.",
        "Nm/s.",
        "Pa/s squared.",
        "Kg/m/s squared.",
      ],
      answer: 1
    },
    {
      id: 7,
      question: "At a constant CAS when flying below sea level an aircraft will have:",
      options: [
        "a higher TAS than at sea level.",
        "a lower TAS than at sea level at ISA conditions.",
        "the same TAS as at sea level.",
        "the same TAS, but an increased IAS.",
      ],
      answer: 1
    },
    {
      id: 8,
      question: "Static pressure acts:",
      options: [
        "parallel to airflow.",
        "parallel to dynamic pressure.",
        "in all directions.",
        "downwards.",
      ],
      answer: 2
    },
    {
      id: 9,
      question: "TAS is:",
      options: [
        "higher than the speed of the undisturbed airstream around the aircraft.",
        "lower than the speed of the undisturbed airstream around the aircraft.",
        "lower than IAS at ISA altitudes below sea level.",
        "equal to IAS, multiplied by air density at sea level.",
      ],
      answer: 2
    },
    {
      id: 10,
      question: "The difference between IAS and TAS will:",
      options: [
        "increase with decreasing temperature.",
        "increase with increasing density.",
        "remain constant at all times.",
        "decrease with decreasing altitude.",
      ],
      answer: 3
    },
    {
      id: 11,
      question: "As a smooth flow of subsonic air at a velocity less than M 0.4 flows through a divergent duct: (i) static pressure (ii) velocity",
      options: [
        "(i) increases and (ii) decreases",
        "(i) increases and (ii) increases",
        "(i) decreases and (ii) decreases",
        "(i) decreases and (ii) increases",
      ],
      answer: 0
    },
    {
      id: 12,
      question: "As subsonic air flows through a convergent duct: (i) static pressure (ii) velocity",
      options: [
        "(i) increases and (ii) decreases",
        "(i) increases and (ii) increases",
        "(i) decreases and (ii) decreases",
        "(i) decreases and (ii) increases",
      ],
      answer: 3
    },
    {
      id: 13,
      question: "Bernoulli’s Theorem states:",
      options: [
        "dynamic pressure increases and static pressure increases.",
        "dynamic pressure increases and static pressure decreases.",
        "dynamic pressure is maximum at stagnation point.",
        "there is zero pressure at zero dynamic pressure.",
      ],
      answer: 1
    },
    {
      id: 14,
      question: "Consider a uniform flow of air at velocity V in a streamtube. If the temperature of the air in the tube is raised:",
      options: [
        "the mass flow remains constant and velocity V decreases.",
        "the mass flow will increase and velocity V remain constant.",
        "the mass flow will decrease and velocity V will remain constant.",
        "the mass flow remains constant and the velocity V will increase.",
      ],
      answer: 3
    },
    {
      id: 15,
      question: "In a subsonic flow venturi, the relationship between the total pressure, static pressure and dynamic pressure of undisturbed air and air in the throat will be: (i) Dynamic pressure will be constant, static pressure will decrease. (ii) Total pressure will be constant, dynamic pressure will increase.",
      options: [
        "both (i) and (ii) are correct.",
        "(i) is correct and (ii) is incorrect.",
        "(i) is incorrect and (ii) is correct.",
        "both (i) and (ii) are incorrect.",
      ],
      answer: 2
    },
    {
      id: 16,
      question: "In accordance with Bernoulli’s Theorem, where PT = Total Pressure, PS = Static pressure and q = Dynamic pressure:",
      options: [
        "PT + PS = q",
        "PT = PS - q",
        "PT - PS = q",
        "PS + PT = q",
      ],
      answer: 2
    },
    {
      id: 17,
      question: "The Principle of Continuity states that in a streamtube of decreasing cross-sectional area, the speed of a subsonic and incompressible airflow will:",
      options: [
        "remain the same.",
        "decrease.",
        "increase.",
        "sonic.",
      ],
      answer: 2
    },
    {
      id: 18,
      question: "The Principle of Continuity states that in a tube of increasing cross-sectional area, the speed of a subsonic and incompressible airflow will:",
      options: [
        "remain the same.",
        "decrease.",
        "sonic.",
        "increase.",
      ],
      answer: 1
    },
    {
      id: 19,
      question: "What are the units for wing loading and dynamic pressure?",
      options: [
        "N/square metre and N/square metre.",
        "Nm and Nm.",
        "N and N/square metre.",
        "N/square metre and joules.",
      ],
      answer: 0
    },
    {
      id: 20,
      question: "When considering the Principle of Continuity for incompressible subsonic flow, what happens in a streamtube with a change in cross-sectional area?",
      options: [
        "The density at the throat will be the same as the density at the mouth.",
        "The density at the throat will be less than the density at the mouth.",
        "The density at the throat will be greater than the density at the mouth.",
        "Cannot say without knowing the change in cross-sectional area of the",
      ],
      answer: 0
    },
    {
      id: 21,
      question: "When considering the Principle of Continuity for subsonic flow, what happens in a streamtube for a change in cross-sectional area?",
      options: [
        "RHO 1 = RHO 2",
        "RHO 1 > RHO 2",
        "RHO 2 > RHO 1",
        "Cannot say without knowing the change in cross-sectional area of the",
      ],
      answer: 0
    },
    {
      id: 22,
      question: "Which of the following creates lift?",
      options: [
        "An accelerated air mass.",
        "A retarded air mass.",
        "A change in direction of mass flow.",
        "A symmetrical aerofoil at zero angle of attack in a high speed flow.",
      ],
      answer: 0
    },
    {
      id: 23,
      question: "Which of the following statements about a venturi in a subsonic airflow is correct? (i) The dynamic pressure in the undisturbed flow and in the throat are equal. (ii) The total pressure in the undisturbed flow and in the throat are equal.",
      options: [
        "(i) is correct and (ii) is incorrect.",
        "(i) is incorrect and (ii) is correct.",
        "(i) and (ii) are correct.",
        "(i) and (ii) are incorrect.",
      ],
      answer: 1
    },
    {
      id: 24,
      question: "A line from the centre of curvature of the leading edge to the trailing edge, equidistant from the top and bottom wing surface is the:",
      options: [
        "camber line.",
        "upper camber line.",
        "mean chord.",
        "mean aerodynamic chord.",
      ],
      answer: 0
    },
    {
      id: 25,
      question: "A symmetrical aerofoil section at CL = 0 will produce?",
      options: [
        "A negative (nose-down) pitching moment.",
        "A positive (nose-up) pitching moment.",
        "Zero pitching moment.",
        "No aerodynamic force.",
      ],
      answer: 2
    },
    {
      id: 26,
      question: "Angle of attack is the angle between:",
      options: [
        "undisturbed airflow and chord line.",
        "undisturbed airflow and mean camber line.",
        "local airflow and chord line.",
        "local airflow and mean camber line.",
      ],
      answer: 0
    },
    {
      id: 27,
      question: "How is the thickness of an aerofoil section measured?",
      options: [
        "As the ratio of wing angle.",
        "Related to camber.",
        "As the percentage of chord.",
        "In metres.",
      ],
      answer: 2
    },
    {
      id: 28,
      question: "Lift and drag respectively are normal and parallel to:",
      options: [
        "the chord line.",
        "the longitudinal axis.",
        "the horizon.",
        "the relative airflow.",
      ],
      answer: 3
    },
    {
      id: 29,
      question: "The angle between the aeroplane longitudinal axis and the chord line is:",
      options: [
        "angle of incidence.",
        "glide path angle.",
        "angle of attack.",
        "climb path angle.",
      ],
      answer: 0
    },
    {
      id: 30,
      question: "The term angle of attack is defined as:",
      options: [
        "the angle between the relative airflow and the horizontal axis.",
        "the angle between the wing chord line and the relative wind.",
        "the angle that determines the magnitude of the lift force.",
        "the angle between the wing and tailplane incidence.",
      ],
      answer: 1
    },
    {
      id: 31,
      question: "What is the angle of attack?",
      options: [
        "Angle of the chord line to the relative free stream flow.",
        "Angle of the chord line to the fuselage datum.",
        "Angle of the tailplane chord to the wing chord.",
        "Angle of the tailplane chord to the fuselage datum.",
      ],
      answer: 0
    },
    {
      id: 32,
      question: "When considering the coefficient of lift and angle of attack of aerofoil sections:",
      options: [
        " a symmetrical section at zero angle of attack will produce a small positive coefficient of lift.",
        " an asymmetrical section at zero angle of attack will produce zero coefficient of lift.",
        " a symmetrical section at zero angle of attack will produce zero coefficient of lift.",
        "aerofoil section symmetry has no effect on lift coefficient",
      ],
      answer: 2
    },
    {
      id: 33,
      question: "When considering the lift and drag forces on an aerofoil section:",
      options: [
        "they are only normal to each other at one angle of attack.",
        "they both depend on the pressure distribution on the aerofoil section.",
        "they vary linearly.",
        "lift is proportional to drag.",
      ],
      answer: 1
    },
    {
      id: 34,
      question: "Where does the lift act on the wing?",
      options: [
        "Suction.",
        "Always forward of the CG.",
        "Centre of Gravity.",
        "Centre of Pressure.",
      ],
      answer: 3
    },
    {
      id: 35,
      question: "Which of the following creates lift?",
      options: [
        "A slightly cambered aerofoil.",
        "An aerofoil in a high speed flow.",
        "Air accelerated upwards.",
        "Air accelerated downwards.",
      ],
      answer: 1
    },
    {
      id: 36,
      question: "Which of the following is the greatest factor causing lift?",
      options: [
        "Suction above the wing.",
        "Increased pressure below the wing.",
        "Increased airflow velocity below the wing.",
        "Decreased airflow velocity above the wing.",
      ],
      answer: 0
    },
    {
      id: 37,
      question: "Which of the following statements is correct?",
      options: [
        "Lift acts perpendicular to the horizontal and drag parallel in a rearwards direction.",
        "Drag acts parallel to the chord and opposite to the direction of motion of the aircraft and lift acts perpendicular to the chord.",
        "Lift acts at right angles to the top surface of the wing and drag acts at right angles to lift.",
        "Drag acts in the same direction as the relative wind and lift perpendicular to the relative wind.",
      ],
      answer: 3
    },
    {
      id: 38,
      question: "If IAS is doubled, by which of the following factors should the original CL be multiplied to maintain level flight?",
      options: [
        "0·25",
        "0·5",
        "2·0",
        "4·0",
      ],
      answer: 0
    },
    {
      id: 39,
      question: "On entering ground effect:",
      options: [
        "more thrust is required.",
        "less thrust is required.",
        "ground effect has no effect on thrust required.",
        "lift decreases.",
      ],
      answer: 1
    },
    {
      id: 40,
      question: "On the approach to land, ground effect will begin to be felt at:",
      options: [
        "twice the wingspan above the ground.",
        "half the wingspan above the ground.",
        "when the angle of attack is increased.",
        "upon elevator deflection.",
      ],
      answer: 1
    },
    {
      id: 41,
      question: "The formula for lift is",
      options: [
        "L = W",
        "L = 2 rho V squared S CL",
        "L=1/2 rho V squared S CL",
        "L = rho V S CL",
      ],
      answer: 2
    },
    {
      id: 42,
      question: "The influence of ground effect on landing distance will:",
      options: [
        "increase landing distance.",
        "decrease landing distance.",
        "have no effect on landing distance.",
        "depend on flap position.",
      ],
      answer: 0
    },
    {
      id: 43,
      question: "Two identical aircraft of the same weight fly at different altitudes. All other important factors remaining constant, assuming no compressibility and ISA conditions, what is the TAS of each aircraft?",
      options: [
        "The same.",
        "Greater in the higher aircraft.",
        "Greater in the lower aircraft.",
        "Less in the higher aircraft.",
      ],
      answer: 1
    },
    {
      id: 44,
      question: "What do ‘S’ and ‘q’ represent in the lift equation?",
      options: [
        "Static pressure and chord.",
        "Wingspan and dynamic pressure.",
        "Wing area and dynamic pressure.",
        "Wing area and static pressure.",
      ],
      answer: 2
    },
    {
      id: 45,
      question: "What effect on induced drag does entering ground effect have?",
      options: [
        "Increase.",
        "Decrease.",
        "Remain the same.",
        "Induced drag will increase, but profile drag will decrease.",
      ],
      answer: 1
    },
    {
      id: 46,
      question: "What is the CL and CD ratio at normal angles of attack:",
      options: [
        "CL higher.",
        "CD higher.",
        "the same.",
        "CL much higher.",
      ],
      answer: 3
    },
    {
      id: 47,
      question: "What is the MAC of a wing?",
      options: [
        "Area of wing divided by the span.",
        "The same as the mean chord of a rectangular wing of the same span.",
        "The mean chord of the whole aeroplane.",
        "The 25% chord of a swept wing.",
      ],
      answer: 1
    },
    {
      id: 48,
      question: "When an aircraft enters ground effect:",
      options: [
        "the lift vector is inclined rearwards which increases the thrust required.",
        "the lift vector is inclined forwards which reduces the thrust required.",
        "the lift vector is unaffected, the cushion of air increases.",
        "the lift vector is inclined forward which increases the thrust required.",
      ],
      answer: 1
    },
    {
      id: 49,
      question: "When an aircraft enters ground effect:",
      options: [
        "the induced angle of attack increases.",
        "lift decreases and drag increases.",
        "lift increases and drag decreases.",
        "the aircraft will be partially supported on a cushion of air.",
      ],
      answer: 2
    },
    {
      id: 50,
      question: "When considering an angle of attack versus coefficient of lift graph for a cambered aerofoil, where does the lift curve intersect the vertical CL axis?",
      options: [
        "above the origin.",
        "below the origin.",
        "at the point of origin.",
        "to the left of the origin.",
      ],
      answer: 0
    },
    {
      id: 51,
      question: "When in level flight at 1·3VS, what is the CL as a percentage of CLMAX?",
      options: [
        "59%.",
        "77%.",
        "130%.",
        "169%.",
      ],
      answer: 0
    },
    {
      id: 52,
      question: " Which of the following is the cause of wing tip vortices?",
      options: [
        "Air spilling from the top surface to the bottom surface at the wing tip.",
        "Air spilling from the bottom surface to the top surface at the wing tip",
        "Air spilling from the bottom surface to the top surface at the left wing tip and from the top surface to the bottom surface at the right wing tip.",
        "Spanwise flow vector from the tip to the root on the bottom surface of the wing.",
      ],
      answer: 1
    },
    {
      id: 53,
      question: "Which of the following is the correct definition of aspect ratio?",
      options: [
        "Span divided by tip chord.",
        "Chord divided by span.",
        "Span divided by mean chord.",
        "Chord divided by span, measured at the 25% chord position.",
      ],
      answer: 2
    },
    {
      id: 54,
      question: "Which of the following most accurately describes the airflow which causes wing tip vortices? a. From the root to the tip on the top surface and from the tip to the root on the bottom surface over the wing tip. b. From the root to the tip on the top surface and from the tip to the root on the bottom surface over the trailing edge. c. From the tip to the root on the top surface and from the root to the tip on the bottom surface over the trailing edge. d. From the tip to the root on the top surface and from the root to the tip on the bottom surface over the wing tip. 55. Wing tip vortices are caused by unequal pressure distribution on the wing which results in airflow from:",
      options: [
        "bottom to top round the trailing edge.",
        "top to bottom round the trailing edge.",
        "bottom to top round wing tip.",
        "top to bottom round wing tip.",
      ],
      answer: 3
    },
    {
      id: 55,
      question: "Wing tip vortices are caused by unequal pressure distribution on the wing which results in airflow from:",
      options: [
        "Bottom to top round the trailing edge.",
        "Top to bottom round the trailing edge.",
        "Bottom to top round wing tip.",
        "top to bottom round wing tip.",
      ],
      answer: 2
    },
    {
      id: 56,
      question: "With flaps deployed, at a constant IAS in straight and level flight, the magnitude of tip vortices:",
      options: [
        "increases or decreases depending upon the initial angle of attack.",
        "increases.",
        "decreases.",
        "remains the same.",
      ],
      answer: 2
    },
    {
      id: 57,
      question: "A high aspect ratio wing:",
      options: [
        "increases induced drag.",
        "decreases induced drag.",
        "is structurally stiffer than a low aspect ratio.",
        "has a higher stall angle than a low aspect ratio.",
      ],
      answer: 1
    },
    {
      id: 58,
      question: "An aircraft is flying straight and level; if density halves, aerodynamic drag will:",
      options: [
        "increase by a factor of four.",
        "increase by a factor of two.",
        "decrease by a factor of two.",
        "decrease by a factor of four.",
      ],
      answer: 2
    },
    {
      id: 59,
      question: "At a constant IAS, induced drag is affected by:",
      options: [
        "aircraft weight.",
        "changes in thrust.",
        "angle between chord line and longitudinal axis.",
        "wing location.",
      ],
      answer: 0
    },
    {
      id: 60,
      question: "CDi is proportional to which of the following?",
      options: [
        "CLMAX.",
        "CL squared.",
        "the square root of the CL.",
        "CL.",
      ],
      answer: 1
    },
    {
      id: 61,
      question: "Considering the lift to drag ratio, in straight and level flight which of the following is correct?",
      options: [
        "L/D is maximum at the speed for minimum total drag.",
        "L/D maximum decreases with increasing lift.",
        "L/D is maximum when lift equals weight.",
        "L/D is maximum when lift equals zero.",
      ],
      answer: 0
    },
    {
      id: 62,
      question: "High aspect ratio:",
      options: [
        "reduces parasite drag.",
        "reduces induced drag.",
        "increases stalling speed.",
        "increases manoeuvrability.",
      ],
      answer: 1
    },
    {
      id: 63,
      question: "How does aerodynamic drag vary when airspeed is doubled?",
      options: [
        "4",
        "16",
        "1",
        "2",
      ],
      answer: 0
    },
    {
      id: 64,
      question: "If dynamic (kinetic) pressure increases, what is the effect on total drag (if all important factors remain constant)?",
      options: [
        "Drag decreases.",
        "Drag increases.",
        "It has no effect on drag.",
        "Drag only changes with changing ground speed.",
      ],
      answer: 1
    },
    {
      id: 65,
      question: "If IAS is increased from 80 kt to 160 kt at a constant air density, TAS will double. What would be the effect on (i) CDi and (ii) Di?",
      options: [
        "(i)   2    (ii)   2",
        "(i)   4    (ii)   2",
        "(i)   ¼    (ii)   4",
        "(i)   1/16   (ii)   ¼",
      ],
      answer: 3
    },
    {
      id: 66,
      question: " If IAS is increased from 80 kt to 160 kt at a constant air density, TAS will double.What would be the effect on (i) CDi and (ii) Di?",
      options: [
        "(i)   2    (ii)   2",
        "(i)   4    (ii)   2",
        "(i)   ¼    (ii)   4",
        "(i)   1/16 (ii)   1/4",
      ],
      answer: 0
    },
    {
      id: 67,
      question: "If the frontal area of an object in an airstream is increased by a factor of three, by what factor does drag increase?",
      options: [
        "9",
        "3",
        "6",
        "1·5",
      ],
      answer: 1
    },
    {
      id: 68,
      question: "If the IAS is increased by a factor of 4, by what factor would the drag increase?",
      options: [
        "4",
        "8",
        "12",
        "16",
      ],
      answer: 3
    },
    {
      id: 69,
      question: "In a stream tube, if density is halved, drag will be reduced by a factor of:",
      options: [
        "3",
        "4",
        "6",
        "2",
      ],
      answer: 3
    },
    {
      id: 70,
      question: "In straight and level flight, which of the following would cause induced drag to vary linearly if weight is constant?",
      options: [
        "1/V.",
        "V.",
        "1/V squared.",
        "V squared.",
      ],
      answer: 2
    },
    {
      id: 71,
      question: "In subsonic flight, which is correct for VMD?",
      options: [
        "Parasite drag greater than induced drag.",
        "CL and CD are minimum.",
        "Parasite and induced drag are equal.",
        "Induced drag is greater than parasite drag.",
      ],
      answer: 2
    },
    {
      id: 72,
      question: "Induced drag can be reduced by:",
      options: [
        "increased taper ratio.",
        "decreased aspect ratio.",
        "use of a wing tip with a thinner aerofoil section.",
        "increased aspect ratio.",
      ],
      answer: 3
    },
    {
      id: 73,
      question: "The advantage of a turbulent boundary layer over a laminar boundary layer is:",
      options: [
        "decreases energy.",
        "thinner.",
        "increased skin friction.",
        "less tendency to separate.",
      ],
      answer: 3
    },
    {
      id: 74,
      question: "The effect of winglets is:",
      options: [
        "elliptical pressure distribution increases.",
        "reduction in induced drag.",
        "decrease in stall speed.",
        "longitudinal static stability increases.",
      ],
      answer: 1
    },
    {
      id: 75,
      question: "What does parasite drag vary with?",
      options: [
        "Square of the speed.",
        "CLMAX.",
        "Speed.",
        "Surface area.",
      ],
      answer: 0
    },
    {
      id: 76,
      question: "What effect does aspect ratio have on induced drag?",
      options: [
        "Increased aspect ratio increases induced drag.",
        "Increased aspect ratio reduces induced drag.",
        "Changing aspect ratio has no effect.",
        "Induced drag will equal 1·3 × aspect ratio/chord ratio.",
      ],
      answer: 1
    },
    {
      id: 77,
      question: "What happens to total drag when accelerating from CLMAX to maximum speed?",
      options: [
        "Increases.",
        "Increases then decreases.",
        "Decreases.",
        "Decreases then increases.",
      ],
      answer: 3
    },
    {
      id: 78,
      question: "What is interference drag?",
      options: [
        "Airflow retardation over the aircraft structure due to surface irregularities",
        "Drag caused by high total pressure at the leading edges when compared to the lower pressure present at the trailing edge.",
        "Drag caused by the generation of lift.",
        "Drag due to the interaction of individual boundary layers at the junction of  aircraft major components.",
      ],
      answer: 3
    },
    {
      id: 79,
      question: "What is the cause of induced angle of attack?",
      options: [
        "Downwash from trailing edge in the vicinity of the wing tips.",
        "Change in flow from effective angle of attack.",
        "The upward inclination of the free stream flow around the wing tips.",
        "Wing downwash altering the angle at which the airflow meets the tailplane.",
      ],
      answer: 0
    },
    {
      id: 80,
      question: "CDi is the ratio of?",
      options: [
        "(CL) squared to S.",
        "(CL) squared to AR.",
        "½ rho V squared.",
        "½ rho V squared S.",
      ],
      answer: 1
    },
    {
      id: 81,
      question: "What phenomena causes induced drag?",
      options: [
        "Wing tip vortices.",
        "Wing tanks.",
        "The increased pressure at the leading edge.",
        "The spanwise flow, inward below the wing and outward above.",
      ],
      answer: 0
    },
    {
      id: 82,
      question: "When compared to a laminar boundary layer:",
      options: [
        "a turbulent boundary layer has more kinetic energy.",
        "a turbulent boundary layer is thinner.",
        "less skin friction is generated by a turbulent layer.",
        "a turbulent boundary layer is more likely to separate.",
      ],
      answer: 0
    },
    {
      id: 83,
      question: "When considering the aerodynamic forces acting on an aerofoil section:",
      options: [
        "lift and drag increase linearly with an increase in angle of attack.",
        "lift and drag act normal to each other only at one angle of attack.",
        "lift and drag increase exponentially with an increase in angle of attack.",
        "lift increases linearly and drag increases exponentially with an increase in angle",
      ],
      answer: 3
    },
    {
      id: 84,
      question: "When considering the properties of a laminar and turbulent boundary layer, which of the following statements is correct?",
      options: [
        "Friction drag is the same.",
        "Friction drag higher in laminar.",
        "Friction drag higher in turbulent.",
        "Separation point is most forward with a turbulent layer.",
      ],
      answer: 2
    },
    {
      id: 85,
      question: "When the undercarriage is lowered in flight",
      options: [
        "form drag will increase and the aircraft’s nose-down pitching moment will be unchanged.",
        "induced drag will increase and the aircraft’s nose-down pitching moment will increase.",
        "form drag will increase and the aircraft’s nose-down pitching moment will increase.",
        "induced drag will decrease and the aircraft’s nose-down pitching moment will increase.",
      ],
      answer: 2
    },
    {
      id: 86,
      question: "Which of the following decreases induced drag?",
      options: [
        "Wing fences.",
        "Anhedral.",
        "Winglets.",
        "Low aspect ratio planform.",
      ],
      answer: 2
    },
    {
      id: 87,
      question: "Which of the following is a characteristic of laminar flow boundary layer?",
      options: [
        "Constant velocity.",
        "Constant temperature.",
        "No flow normal to the surface.",
        "No vortices.",
      ],
      answer: 2
    },
    {
      id: 88,
      question: "Which of the following is the correct formula for drag?",
      options: [
        "½ rho   V squared   CL   S",
        "½ rho   V   (CL) squared   S",
        "½ rho   V squared   AR   CD   S",
        "½ rho   V squared   CD   S",
      ],
      answer: 3
    },
    {
      id: 89,
      question: "Which statement about induced drag and tip vortices is correct?",
      options: [
        "Vortex generators diminish tip vortices.",
        "Flow on upper and lower wing surfaces is towards the tip.",
        "They both decrease at high angle of attack.",
        "On the upper surface there is a component of flow towards the root, whilst",
      ],
      answer: 3
    },
    {
      id: 90,
      question: "A jet aircraft flying at high altitude encounters severe turbulence without encountering high speed buffet. If the aircraft decelerates, what type of stall could occur first?",
      options: [
        "Low speed stall.",
        "Accelerated stall.",
        "Deep stall.",
        "Shock stall.",
      ],
      answer: 1
    },
    {
      id: 91,
      question: "A swept wing aircraft stalls and the wake contacts the horizontal tail. What would be the stall behaviour?",
      options: [
        "Nose down.",
        "Nose up and/or elevator ineffectiveness.",
        "Tendency to increase speed after stall.",
        "Nose up.",
      ],
      answer: 1
    },
    {
      id: 92,
      question: "An aircraft at a weight of 237 402N stalls at 132 kt. At a weight of 356 103N it would stall at:",
      options: [
        "88 kt.",
        "162 kt.",
        "108 kt.",
        "172 kt.",
      ],
      answer: 1
    },
    {
      id: 93,
      question: "An aircraft at low subsonic speed will never stall:",
      options: [
        "as long as the CAS is kept above the power-on stall speed.",
        "as long as the IAS is kept above the power-on stall speed.",
        "as long as the maximum angle of attack is not exceeded.",
        "as long as the pitch angle is negative.",
      ],
      answer: 2
    },
    {
      id: 94,
      question: "At high angle of attack, where does airflow separation begin?",
      options: [
        "Upper surface, towards the leading edge.",
        "Lower surface, towards the trailing edge.",
        "Upper surface, towards the trailing edge.",
        "Lower surface, towards the leading edge.",
      ],
      answer: 2
    },
    {
      id: 95,
      question: "At the point of stall:",
      options: [
        "lift decreases, drag decreases.",
        "lift constant, drag increases.",
        "lift decreases, drag increases.",
        "lift decreases, drag constant.",
      ],
      answer: 2
    },
    {
      id: 96,
      question: "During erect spin recovery the correct recovery actions are:",
      options: [
        "control stick pulled aft.",
        "ailerons held neutral.",
        "control stick sideways against bank.",
        "control stick sideways towards bank.",
      ],
      answer: 1
    },
    {
      id: 97,
      question: "Force on the tail and its effect on VS due to CG movement:",
      options: [
        "If  rearward movement of the CG gives a reduced down-force on the tail, VS will be higher.",
        "If forward movement of the CG gives a reduced down-force on the tail, VS will be higher.",
        "If rearward movement of the CG gives a reduced down-force on the tail, VS will be reduced.",
        "If rearward movement of the CG gives an increased down-force on the tail, VS will be reduced.",
      ],
      answer: 2
    },
    {
      id: 98,
      question: "How do vortex generators work?",
      options: [
        "Re-direct spanwise flow.",
        "Take energy from free stream and introduce it into the boundary layer.",
        "Reduce kinetic energy to delay separation.",
        "Reduce the adverse pressure gradient.",
      ],
      answer: 1
    },
    {
      id: 99,
      question: "If a jet aircraft is at 60 degrees bank angle during a constant altitude turn, the stall speed will be:",
      options: [
        "1· 60 greater.",
        "1· 19 greater.",
        "1· 41 greater.",
        "2· 00 greater.",
      ],
      answer: 2
    },
    {
      id: 100,
      question: "If the stalling speed in a 15 degree bank turn is 60 kt, what would the stall speed be in a 45 degree bank?",
      options: [
        "83 kt.",
        "70 kt.",
        "85 kt.",
        "60 kt.",
      ],
      answer: 1
    },
    {
      id: 101,
      question: "If the straight and level stall speed is 100 kt, what will be the stall speed in a 1·5g turn?",
      options: [
        "122 kt.",
        "150 kt.",
        "81 kt.",
        "100 kt.",
      ],
      answer: 0
    },
    {
      id: 102,
      question: "If VS is 100 kt in straight and level flight, during a 45° bank turn VS will be:",
      options: [
        "100 kt.",
        "140 kt.",
        "80 kt.",
        "119 kt.",
      ],
      answer: 3
    },
    {
      id: 103,
      question: "In level flight at 1.4VS what is the approximate bank angle at which stall will occur?",
      options: [
        "44 degrees.",
        "30 degrees.",
        "60 degrees.",
        "32 degrees.",
      ],
      answer: 2
    },
    {
      id: 104,
      question: "In recovery from a spin:",
      options: [
        "ailerons should be kept neutral.",
        "airspeed increases.",
        "ailerons are used to stop the spin.",
        "rudder and ailerons are used against the direction of spin rotation.",
      ],
      answer: 0
    },
    {
      id: 105,
      question: "Stall speed in a turn is proportional to:",
      options: [
        "lift.",
        "weight.",
        "the square root of the load factor.",
        "TAS squared.",
      ],
      answer: 2
    },
    {
      id: 106,
      question: "Stalling speed increases when:",
      options: [
        "recovering from a steep dive.",
        "the aircraft is subjected to minor altitude changes, i.e. 0 to 10 000 ft.",
        "the aircraft weight decreases.",
        "flaps are deployed.",
      ],
      answer: 0
    },
    {
      id: 107,
      question: "The angle of attack at the stall:",
      options: [
        "increases with forward CG.",
        "increases with aft CG.",
        "decreases with decrease in weight.",
        "is not affected by changes in weight.",
      ],
      answer: 3
    },
    {
      id: 108,
      question: "The CP on a swept wing aircraft will move forward due to:",
      options: [
        "boundary layer fences and spanwise flow.",
        "tip stall of the wing.",
        "flow separation at the root due to spanwise flow.",
        "change in wing angle of incidence.",
      ],
      answer: 1
    },
    {
      id: 109,
      question: "The effect of tropical rain on drag and stall speed would be to:",
      options: [
        "increase drag and increase stall speed.",
        "increase drag and decrease stall speed.",
        "decrease drag and increase stall speed.",
        "decrease drag and decrease stall speed.",
      ],
      answer: 0
    },
    {
      id: 110,
      question: "The IAS of a stall:",
      options: [
        "increases with high altitude; more flaps; slats.",
        " may increase with increasing altitude, especially high altitude; forward CG and icing.",
        "decreases with forward CG and increasing altitude.",
        "altitude never affects stall speed IAS.",
      ],
      answer: 1
    },
    {
      id: 111,
      question: "Vortex generators:",
      options: [
        "take energy from the laminar flow to induce boundary layer separation.",
        "use free stream flow to induce laminar flow.",
        "prevent spanwise flow.",
        "use free stream flow to increase energy in the turbulent boundary layer.",
      ],
      answer: 3
    },
    {
      id: 112,
      question: "VS is 100 kt at n = 1; what will the stall speed be at n = 2?",
      options: [
        "200 kt.",
        "119 kt.",
        "141 kt.",
        "100 kt.",
      ],
      answer: 2
    },
    {
      id: 113,
      question: "What are the effects of tropical rain on: (i) CLMAX (ii) Drag",
      options: [
        "(i) increase  (ii) decrease",
        "(i) decrease  (ii) increase",
        "(i) increase  (ii) increase",
        "(i) decrease  (ii) decrease",
      ],
      answer: 1
    },
    {
      id: 114,
      question: "What causes a swept wing aircraft to pitch-up at the stall?",
      options: [
        "Negative camber at the root.",
        "Separated airflow at the root.",
        "Spanwise flow.",
        "Rearward movement of the CP.",
      ],
      answer: 2
    },
    {
      id: 115,
      question: "What causes deep stall in a swept-back wing?",
      options: [
        "CP moves aft.",
        "CP moves forward.",
        "Root stall.",
        "Spanwise flow from tip to root on wing upper surface.",
      ],
      answer: 1
    },
    {
      id: 116,
      question: "What does a stick pusher do?",
      options: [
        "Activate at a certain angle of attack and pull the control column backwards.",
        "Activate at a certain angle of attack and push the stick forward.",
        "Activate at a certain IAS and vibrate the stick.",
        "Activate at a certain IAS and push the stick forward.",
      ],
      answer: 1
    },
    {
      id: 117,
      question: "What effect on stall speed do the following have?",
      options: [
        "Increased anhedral increases stall speed.",
        "Fitting a ‘T’ tail will reduce stall speed.",
        "Increasing sweepback decreases stall speed.",
        "Decreasing sweep angle decreases stall speed.",
      ],
      answer: 3
    },
    {
      id: 118,
      question: "What happens to the stall speed with flaps down, when compared to flaps up?",
      options: [
        "Increase.",
        "Decrease.",
        "Remain the same.",
        "None",
      ],
      answer: 1
    },
    {
      id: 119,
      question: "What influence does the CG being on the forward limit have on VS and the stall angle?",
      options: [
        "VS increases, stall angle remains constant.",
        "VS increases, stall angle increases.",
        "VS decreases, stall angle remains constant.",
        "VS decreases, stall angle decreases.",
      ],
      answer: 0
    },
    {
      id: 120,
      question: "What is a high speed stall?",
      options: [
        "Separation of the airflow due to shock wave formation.",
        "A stall caused by increasing the load factor (g) during a manoeuvre.",
        "A stall due to decreasing CLMAX at speeds above M 0.4.",
        "Excessive dynamic pressure causing airflow separation.",
      ],
      answer: 2
    },
    {
      id: 121,
      question: "What is load factor?",
      options: [
        "1 / Bank angle.",
        "Weight / Lift.",
        "Lift / Weight.",
        "Weight / Wing area.",
      ],
      answer: 2
    },
    {
      id: 122,
      question: "What is the percentage increase in stall speed in a 45° bank turn?",
      options: [
        "45%.",
        "41%.",
        "19%.",
        "10%.",
      ],
      answer: 2
    },
    {
      id: 123,
      question: "What is the standard stall recovery for a light aircraft?",
      options: [
        "Pitch down, stick neutral roll, correct for bank with rudder.",
        "Pitch down, stick neutral roll, correct for bank with aileron.",
        "Pitch down, stick neutral, wait for neutral tendency.",
        "Pitch down, stick neutral roll, do not correct for bank.",
      ],
      answer: 0
    },
    {
      id: 124,
      question: "What percentage increase in lift is required to maintain altitude while in a 45 degree bank turn?",
      options: [
        "19%.",
        "41%.",
        "50%.",
        "10%.",
      ],
      answer: 1
    },
    {
      id: 125,
      question: "When an aircraft wing stalls:",
      options: [
        "a swept-back wing will stall from the root and the CP will move aft.",
        " a non-swept rectangular wing will stall from the root and the CP will move forwards.",
        " a non-swept rectangular  wing will tend to stall from the tip and the CP will move backwards.",
        "a swept-back wing will stall from the tip and the CP will move forward",
      ],
      answer: 3
    },
    {
      id: 126,
      question: "When entering a stall, the CP of a straight rectangular wing (i) and a strongly swept wing (ii) will:",
      options: [
        "(i) move aft  (ii) move forward.",
        "(i) move aft  (ii) move aft.",
        "(i) move aft  (ii) not move.",
        "(i) not move  (ii) not move.",
      ],
      answer: 0
    },
    {
      id: 127,
      question: "Which is the most critical phase regarding ice on a wing leading edge?",
      options: [
        "During the take-off run.",
        "The last part of rotation.",
        "Climb with all engines operating.",
        "All phases are equally important.",
      ],
      answer: 1
    },
    {
      id: 128,
      question: "Which kind of stall occurs at the lowest angle of attack?",
      options: [
        "Deep stall.",
        "Accelerated stall.",
        "Low speed stall.",
        "Shock stall.",
      ],
      answer: 3
    },
    {
      id: 129,
      question: "Which of the following aircraft designs would be most prone to super stall?",
      options: [
        "‘T’ tail.",
        "Swept forward wing.",
        "Swept-back wing.",
        "Pod mounted engines beneath the wing.",
      ],
      answer: 2
    },
    {
      id: 130,
      question: "Which of the following combination of characteristics would be most likely make an aircraft susceptible to deep stall?",
      options: [
        "Swept wing and wing mounted engines.",
        "Swept wing and ‘T’ tail.",
        "Straight wing and wing mounted engines.",
        "Straight wing and ‘T’ tail.",
      ],
      answer: 1
    },
    {
      id: 131,
      question: "Which of the following is the correct designation of stall speed in the landing configuration? a. VS1gb. VS1c. VSOd. VSL 132. Which of the following is the most important result/problem caused by ice formation?",
      options: [
        "VS1g",
        "VS1",
        "Vso",
        "Vsl",
      ],
      answer: 2
    },
    {
      id: 132,
      question: "Which of the following is the most important result/problem caused by ice formation?",
      options: [
        "Increased drag.",
        "Increased weight.",
        "Blockage of the controls",
        "Reduction in CLMAX",
      ],
      answer: 3
    },
    {
      id: 133,
      question: "Which of the following is the speed that would activate the stick shaker?",
      options: [
        "1.5 VS.",
        "1.15 VS.",
        "1.2 VS.",
        "Above VS.",
      ],
      answer: 3
    },
    {
      id: 134,
      question: "Which of the following is used to activate a stall warning device?",
      options: [
        "Movement of the CP.",
        "Movement of the CG.",
        "Movement of the stagnation point.",
        "A reduction in dynamic pressure.",
      ],
      answer: 2
    },
    {
      id: 135,
      question: "Which of the following would indicate an impending stall?",
      options: [
        "Stall strip and stick shaker.",
        "Stall strip and angle of attack indicator.",
        "Airspeed indicator and stick shaker.",
        "Stick shaker and angle of attack indicator.",
      ],
      answer: 3
    },
    {
      id: 136,
      question: "Which stall has the greatest angle of attack?",
      options: [
        "Low speed stall.",
        "High speed stall (shock stall).",
        "Deep stall.",
        "Accelerated stall.",
      ],
      answer: 2
    },
    {
      id: 137,
      question: "With a swept wing the nose-up phenomena is caused by:",
      options: [
        "deploying lift augmentation devices.",
        "wing fences.",
        "wing sweep prevents the nose-up phenomena.",
        "tip stall.",
      ],
      answer: 3
    },
    {
      id: 138,
      question: "When flying straight and level in 1g flight, slightly below maximum all up weight, a basic stall warning system (flapper switch) activates at 75 kt IAS and the aircraft stalls at 68 kt IAS. Under the same conditions at maximum all up weight the margin between stall warning and stall will:",
      options: [
        "increase because increasing weight increases the 1g stall speed.",
        "decrease because the 1g stall speed is an IAS.",
        "decrease because increasing weight increases the 1g stall speed.",
        "remain the same because increased weight increases the IAS that corresponds",
      ],
      answer: 3
    },
    {
      id: 139,
      question: "A slat on an aerofoil:",
      options: [
        "Increases the energy of the boundary layer and decreases the critical angle of attack.",
        "Increases the wing leading edge radius by rotating forward and down from its stowed position on the bottom side of the wing leading edge.",
        "Deploys automatically under the influence of increased stagnation pressure at high angles of attack / low IAS.",
        "Increases the energy of the boundary layer and increases the maximum angle of attack.",
      ],
      answer: 3
    },
    {
      id: 140,
      question: "After take-off why are the slats (if installed) always retracted later than the trailing edge flaps? a. Because VMCA with slats extended is more favourable compared to the flaps extended position. b. Because flaps extended gives a large decrease in stall speed with relatively less drag. c. Because slats extended provides a better view from the cockpit than flaps extended. d. Because slats extended gives a large decrease in stall speed with relatively less drag. 141. An aircraft has trailing edge flap positions of 0, 15, 30 and 45 degrees plus slats can be deployed. What will have the greatest negative influence on CL / CD?",
      options: [
        "Deploying slats.",
        "0 - 15 flaps.",
        "15 - 30 flaps.",
        "30 - 45 flaps.",
      ],
      answer: 3
    },
    {
      id: 141,
      question: "n aircraft has trailing edge flap positions of  0, 15, 30 and 45 degrees plus slats can be deployed. What will have the greatest negative influence on CL/CD?",
      options: [
        "Deploying slats.",
        "0 - 15 flaps.",
        "15 - 30 flaps.",
        "30 - 45 flaps.",
      ],
      answer: 3
    },
    {
      id: 142,
      question: "Extending the flaps while maintaining a constant angle of attack (all other factors constant):",
      options: [
        "the aircraft will sink suddenly.",
        "the aircraft will yaw.",
        "the aircraft will climb.",
        "the aircraft will roll.",
      ],
      answer: 2
    },
    {
      id: 143,
      question: "For an aircraft flying straight and level at constant IAS, when flaps are deployed the induced drag:",
      options: [
        "increases.",
        "decreases.",
        "increases or decreases depending on the aircraft.",
        "stays the same.",
      ],
      answer: 3
    },
    {
      id: 144,
      question: "How does a plain flap increase CL?",
      options: [
        "Increases camber.",
        "Increases angle of attack.",
        "Changes position of CP.",
        "Decreases the Aspect Ratio.",
      ],
      answer: 0
    },
    {
      id: 145,
      question: "How is the pitching moment affected if flaps are deployed in straight and level flight? a. Pitch up. b. Pitch down. c. Depends on CG position. 146. If flaps are extended in level flight:",
      options: [
        "lift and drag increase.",
        "CLMAX increases.",
        "CL and drag increase.",
        "CL increases.",
      ],
      answer: 2
    },
    {
      id: 146,
      question: "If flaps are extended in level flight:",
      options: [
        "Lift and drag increase.",
        "CLMAX increases.",
        "CL and drag increase.",
        "CL increases.",
      ],
      answer: 1
    },
    {
      id: 147,
      question: "If the angle of attack is maintained constant, what happens to the coefficient of lift when flaps are deployed?",
      options: [
        "Increased.",
        "Decreased.",
        "Changes with the square of IAS.",
        "Remains constant because angle of attack remains the same.",
      ],
      answer: 0
    },
    {
      id: 148,
      question: "In order to maintain straight and level flight when trailing edge flaps are retracted, the angle of attack must:",
      options: [
        "be increased or decreased depending on type of flap.",
        "be decreased.",
        "be increased.",
        "stay the same because the lift requirement will be the same.",
      ],
      answer: 2
    },
    {
      id: 149,
      question: "On a highly swept back wing with leading edge flaps and leading edge slats, which device would be fitted in the following possible locations?",
      options: [
        "Slats inboard, leading edge flaps outboard.",
        "Slats outboard, leading edge flaps inboard.",
        "Alternate leading edge flaps and slats along the wing leading edge.",
        "There is no preferred position for these two devices.",
      ],
      answer: 1
    },
    {
      id: 150,
      question: "On a swept-back wing, in which of the following locations would Krueger flaps be fitted?",
      options: [
        "Inboard leading edge.",
        "Outboard leading edge.",
        "The leading edge.",
        "The trailing edge.",
      ],
      answer: 0
    },
    {
      id: 151,
      question: "The effects of leading edge slats:",
      options: [
        "Increase boundary layer energy, move suction peak on to slat and increase CLMAX angle of attack.",
        "Increase camber, increase suction peak on main wing, increase effective angle of attack and move CLMAX to higher angle of attack.",
        "Increase boundary layer energy, increase suction peak on main wing section, move CLMAX to a higher angle of attack.",
        "Decrease boundary layer energy, move suction peak onto slat, move CLMAX to a lower angle of attack.",
      ],
      answer: 2
    },
    {
      id: 152,
      question: "The maximum angle of attack for the flaps down configuration, compared to flaps up is:",
      options: [
        "greater.",
        "smaller.",
        "unchanged.",
        "smaller or greater, depending on CG position.",
      ],
      answer: 1
    },
    {
      id: 153,
      question: "What is the effect of deploying leading edge flaps?",
      options: [
        "Decrease CLMAX.",
        "Decrease the critical angle of attack.",
        "Not affect the critical angle of attack.",
        "Increase the critical angle of attack.",
      ],
      answer: 3
    },
    {
      id: 154,
      question: "What is the effect of deploying trailing edge flaps?",
      options: [
        "Increased minimum glide angle.",
        "Decreased minimum glide angle.",
        "Increased glide range.",
        "Decreased sink rate.",
      ],
      answer: 0
    },
    {
      id: 155,
      question: "What is the purpose of a slat on the leading edge?",
      options: [
        "Decelerate the air over the top surface.",
        "Thicken the laminar boundary layer over the top surface.",
        "Increase the camber of the wing.",
        "Allow greater angle of attack.",
      ],
      answer: 3
    },
    {
      id: 156,
      question: "What is true regarding deployment of slats / Krueger flaps?",
      options: [
        "Slats increase the critical angle of attack, Krueger flaps do not.",
        "Krueger flaps increase the critical angle of attack, slats do not.",
        "Krueger flaps form a slot, Slats do not.",
        "Slats form a slot, Krueger flaps do not.",
      ],
      answer: 3
    },
    {
      id: 157,
      question: "What must happen to the CL when flaps are deployed while maintaining a constant IAS in straight and level flight?",
      options: [
        "Increase then decrease.",
        "Remain constant.",
        "Decrease.",
        "Increase.",
      ],
      answer: 1
    },
    {
      id: 158,
      question: "What pitching moment will be generated when Fowler flaps are deployed on an aircraft with a high mounted (‘T’ tail) tailplane? a. An aircraft nose-up pitching moment. b. An aircraft nose-down pitching moment. c. The nose-up pitching moment will be balanced by the nose-down pitching moment. d. The resultant aircraft pitching moment will depend upon the relative position of the CP and CG. 159. When trailing edge flaps are deployed:",
      options: [
        "a higher angle of attack is required for maximum lift.",
        "glide distance is degraded.",
        "CLMAX decreases.",
        "VS1g increases.",
      ],
      answer: 1
    },
    {
      id: 159,
      question: "When trailing edge flaps are deployed:",
      options: [
        "a higher angle of attack is required for maximum lift.",
        "Glide distance is degraded.",
        "CLMAX decreases.",
        "VS1g increases.",
      ],
      answer: 1
    },
    {
      id: 160,
      question: "Which of the following increases the stall angle?",
      options: [
        "Slats.",
        "Flaps.",
        "Spoilers.",
        "Ailerons.",
      ],
      answer: 0
    },
    {
      id: 161,
      question: "A low wing jet aircraft is flaring to land. The greatest stick force will be experienced with:",
      options: [
        "flaps up and CG at the aft limit.",
        "flaps fully down and Cg at the aft limit.",
        "flaps fully down and CG at the forward limit.",
        "flaps fully up and Cg at the forward limit.",
      ],
      answer: 2
    },
    {
      id: 162,
      question: " Positive static lateral stability is the tendency of an aeroplane to:",
      options: [
        "Roll to the right in the case of a positive sideslip angle (aeroplane nose to the left).",
        "Roll to the left in the case of a positive sideslip angle (aeroplane nose to the left).",
        "Roll to the left in a right turn.",
        "Roll to the right in a right turn.",
      ],
      answer: 1
    },
    {
      id: 163,
      question: "Positive static longitudinal stability means:",
      options: [
        "nose-down pitching moment when encountering an up gust.",
        "nose-up pitching moment with a speed change at a constant angle of attack.",
        "Nose-down pitching moment with a speed change at a constant angle of attack.",
        "Nose-up moment when encountering an up gust.",
      ],
      answer: 0
    },
    {
      id: 164,
      question: "The CG of an aeroplane is in a fixed position forward of the neutral point. Speed changes cause a departure from the trimmed position. Which of the following statements about the stick force stability is correct? a. An increase of 10 kt from the trimmed position at low speed has more affect on the stick force than an increase in 10 kt from the trimmed position at high speed. b. Increase of speed generates pull forces. c. Aeroplane nose-up trim decreases the stick force stability. d. Stick force stability is not affected by trim. 165. Too much lateral static stability is undesirable because: a. too much aileron needed in a cross-wind landing. b. too much rudder needed in a cross-wind landing. c. constant aileron in cruise in a cross-wind. 166. What is the effect of an aft shift of the CG on (1) static longitudinal stability and (2) the required control deflection for a given pitch change?",
      options: [
        "(1) reduces (2) increases.",
        "(1) increases (2) increases.",
        "(1) increases (2) reduces.",
        "(1) reduces (2) reduces.",
      ],
      answer: 0
    },
    {
      id: 165,
      question: "Too much lateral static stability is undesirable because:",
      options: [
        "Too much aileron needed in a cross-wind landing.",
        "Too much rudder needed in a cross-wind landing.",
        "constant aileron in cruise in a cross-wind.",
        "none",
      ],
      answer: 0
    },
    {
      id: 166,
      question: "What is the effect of an aft shift of the CG on (1) static longitudinal stability and (2) the required control deflection for a given pitch change?",
      options: [
        "(1) reduces (2) increases.",
        "(1) increases (2) increases.",
        "(1) increases (2) reduces.",
        "(1) reduces (2) reduces.",
      ],
      answer: 3
    },
    {
      id: 167,
      question: " Which statement is correct?",
      options: [
        "The stick force per ‘g’ increases when the CG is moved aft.",
        "The stick force per ‘g’ must have both upper and lower limits in order to assure acceptable control characteristics.",
        "If  the slope of the fe-n line becomes negative, generally speaking this is not a problem for control of an aeroplane.",
        "The stick force per ‘g’ can only be corrected by means of electronic devices (stability augmentation) in the case of an unacceptable value.",
      ],
      answer: 1
    },
    {
      id: 168,
      question: "What is pitch angle?",
      options: [
        "The angle between the chord line and the horizontal plane.",
        "The angle between the longitudinal axis and the horizontal plane.",
        "The angle between the chord line and the longitudinal axis.",
        "The angle between the relative airflow and the longitudinal axis.",
      ],
      answer: 1
    },
    {
      id: 169,
      question: "An aircraft of 50 tonnes mass, with two engines each of 60 000 N Thrust and with an L/D ratio of 12:1 is in a straight steady climb. Taking ‘g’ to be 10 m/s/s, what is the climb gradient?",
      options: [
        "12%.",
        "24%.",
        "15.7%.",
        "3.7%.",
      ],
      answer: 2
    },
    {
      id: 170,
      question: "In a straight steady descent:",
      options: [
        "Lift is less than weight, load factor is equal to one.",
        "Lift is less than weight, load factor is less than one.",
        "Lift is equal to weight, load factor is equal to one.",
        "Lift is equal to weight, load factor is less than one.",
      ],
      answer: 1
    },
    {
      id: 171,
      question: "Two aircraft of the same weight and under identical atmospheric conditions are flying level 20 degree bank turns. Aircraft ‘A’ is at 130 kt, aircraft ‘B’ is at 200 kt:",
      options: [
        "the turn radius of ‘A’ will be greater than ‘B’.",
        "the coefficient of lift of ‘A’ will be less than ‘B’.",
        "the load factor of ‘A’ is greater than ‘B’.",
        "rate of turn of ‘A’ is greater than ‘B’.",
      ],
      answer: 3
    },
    {
      id: 172,
      question: "VMCL can be limited by: (i) engine failure during take-off, (ii) maximum rudder deflection.",
      options: [
        "both (i) and (ii) are incorrect.",
        "(i) is incorrect and (ii) is correct.",
        "(i) is correct and (ii) is incorrect.",
        "both (i) and (ii) are correct.",
      ],
      answer: 0
    },
    {
      id: 173,
      question: "Assuming ISA conditions, which statement with respect to the climb is correct?",
      options: [
        "At constant TAS the Mach number decreases.",
        "At constant Mach number the IAS increases.",
        "At constant IAS the TAS decreases.",
        "At constant IAS the Mach number increases.",
      ],
      answer: 3
    },
    {
      id: 174,
      question: "The regime of flight from the critical Mach number (MCRIT) to approximately M 1.3 is called:",
      options: [
        "transonic.",
        "hypersonic.",
        "subsonic.",
        "supersonic.",
      ],
      answer: 0
    },
    {
      id: 175,
      question: "The speed range between high and low speed buffet:",
      options: [
        "decreases during a descent at a constant Mach number.",
        "is always positive at Mach numbers below MMO.",
        "increases during a descent at a constant IAS.",
        "increases during climb.",
      ],
      answer: 2
    },
    {
      id: 176,
      question: "When does the bow wave first appear?",
      options: [
        "At MCRIT.",
        "At Mach 1.",
        "Just above Mach 1.",
        "Just below Mach 1.",
      ],
      answer: 2
    },
    {
      id: 177,
      question: "What can happen to the aeroplane structure flying at a speed just exceeding VA?",
      options: [
        "It may suffer permanent deformation if the elevator is fully deflected upwards.",
        "It may break if the elevator is fully deflected upwards.",
        "IIt may suffer permanent deformation because the flight is performed at to large a dynamic pressure.",
        "It will collapse if a turn is made.",
      ],
      answer: 0
    },
    {
      id: 178,
      question: "Which of the following can affect VA?",
      options: [
        "Mass and pressure altitude.",
        "Mass only.",
        "Pressure altitude only.",
        "It remains a constant IAS.",
      ],
      answer: 0
    },
    {
      id: 179,
      question: "With a vertical gust, what is the point called where the change in the vertical component of lift acts?",
      options: [
        "Neutral point.",
        "Aerodynamic Centre.",
        "Centre of Gravity.",
        "Centre of Thrust.",
      ],
      answer: 1
    },
    {
      id: 180,
      question: "A single-engine aircraft with a constant speed propeller is in a gliding descent with the engine idling, what would be the effect of decreasing the propeller pitch?",
      options: [
        "Increased L/DMAX, increased rate of descent.",
        "Decreased L/DMAX, increased rate of descent.",
        "Increased L/DMAX, decreased rate of descent.",
        "Decreased L/DMAX, decreased rate of descent.",
      ],
      answer: 1
    },
    {
      id: 181,
      question: "The advantage of a constant speed propeller over a fixed pitch propeller is:",
      options: [
        "higher maximum thrust available.",
        "higher maximum efficiency.",
        "more blade surface area available.",
        "nearly maximum efficiency over wide speed range.",
      ],
      answer: 3
    },
    {
      id: 182,
      question: "You are about to take off in an aircraft with a variable pitch propeller. At brake release: (i) Blade pitch and (ii) Propeller RPM lever:",
      options: [
        "(i) reduced,  (ii) increase.",
        "(i) reduced,  (ii) decrease.",
        "(i) increased,  (ii) decrease.",
        "(i) increased,  (ii) increase.",
      ],
      answer: 0
    },
  ]
};
