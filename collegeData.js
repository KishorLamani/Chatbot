// College Knowledge Base - Jain College of Engineering, Belagavi
const collegeData = {
  college: {
    name: "Jain College of Engineering",
    location: "Belagavi, Karnataka",
    approved_by: "AICTE, New Delhi",
    established: 2010,
    website: "www.jce.ac.in",
    phone: "+91-831-XXXXXXX",
    email: "info@jce.ac.in",
    address: "Jain College Campus, Belagavi, Karnataka - 590014"
  },

  courses: {
    MCA: {
      name: "Master of Computer Applications",
      duration: "2 years",
      eligibility: ["Passed BCA/BSc", "Minimum 50% marks in qualifying exam"],
      fees: "₹50,000 per semester",
      total_fees: "₹2,00,000 (total)",
      seats: 60,
      subjects: ["Data Structures", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering", "Machine Learning", "Web Technologies", "Python Programming"]
    },
    BCA: {
      name: "Bachelor of Computer Applications",
      duration: "3 years",
      eligibility: ["Passed 12th/PUC", "Minimum 45% marks"],
      fees: "₹35,000 per semester",
      total_fees: "₹2,10,000 (total)",
      seats: 60
    },
    BE: {
      name: "Bachelor of Engineering",
      duration: "4 years",
      eligibility: ["Passed 12th with PCM", "Minimum 45% marks"],
      fees: "₹45,000 per semester",
      departments: ["Computer Science", "Electronics", "Mechanical", "Civil"]
    }
  },

  admissions: {
    process: "Apply online or visit college office",
    online_form: "Available on college website",
    documents_required: ["10th Marksheet", "12th/Degree Marksheet", "Transfer Certificate", "Caste Certificate (if applicable)", "Passport size photos", "Aadhar Card"],
    admission_open: true,
    last_date: "July 31, 2026",
    helpdesk: "+91-831-XXXXXXX",
    online_admission_fee: "₹500 (non-refundable)"
  },

  facilities: {
    library: "Digital library with 10,000+ books and e-resources",
    labs: ["Computer Lab (150 systems)", "Language Lab", "Physics Lab", "Chemistry Lab", "Electronics Lab"],
    sports: ["Cricket Ground", "Basketball Court", "Badminton Court", "Table Tennis"],
    hostel: {
      boys: "Available - ₹8,000/month",
      girls: "Available - ₹8,500/month",
      facilities: ["Wi-Fi", "Mess", "Laundry", "Security"]
    },
    canteen: "Available 8 AM - 8 PM",
    transport: "Bus facility from major routes in Belagavi",
    wifi: "Campus-wide Wi-Fi connectivity"
  },

  placements: {
    average_package: "₹4.5 LPA",
    highest_package: "₹12 LPA",
    top_recruiters: ["Infosys", "TCS", "Wipro", "Cognizant", "Accenture", "IBM", "HCL"],
    placement_rate: "85%"
  },

  departments: {
    MCA_dept: {
      head: "Prof. [Department Head]",
      faculty_count: 12,
      labs: ["Advanced Computing Lab", "AI/ML Lab", "Web Development Lab"]
    }
  },

  location_map: {
    library: "Block A, Ground Floor",
    principal_office: "Main Building, 1st Floor",
    admissions_office: "Main Building, Ground Floor",
    computer_lab: "Block B, All Floors",
    canteen: "Near Main Gate",
    boys_hostel: "North Campus",
    girls_hostel: "South Campus",
    sports_ground: "East Campus"
  },

  exam_schedule: {
    internal_exams: "October & March",
    semester_exams: "November & April",
    results: "Within 45 days of exam"
  },

  scholarship: {
    government: "SC/ST/OBC scholarships as per Karnataka govt norms",
    merit: "Top 3 students per branch get 25% fee waiver",
    sports: "Sports quota - 10% concession"
  }
};

// Chatbot response logic
function getChatbotResponse(userMessage) {
  const msg = userMessage.toLowerCase().trim();

  // Greeting
  if (msg.match(/^(hi|hello|hey|good morning|good evening|good afternoon|namaste)/)) {
    return {
      text: "Hello! Welcome to Jain College of Engineering, Belagavi! 👋 I'm your virtual college assistant. How can I help you today?",
      suggestions: ["About College", "MCA Fees", "Admissions", "Facilities", "Placements"]
    };
  }

  // About college
  if (msg.includes("about college") || msg.includes("about jain") || msg.includes("jce") || msg.includes("college info")) {
    const c = collegeData.college;
    return {
      text: `🏛️ **${c.name}**\n📍 Location: ${c.location}\n✅ Approved by: ${c.approved_by}\n📅 Established: ${c.established}\n📞 Phone: ${c.phone}\n📧 Email: ${c.email}`,
      suggestions: ["Courses Offered", "Facilities", "Admissions", "Placements"]
    };
  }

  // Fees
  if (msg.includes("fee") || msg.includes("fees") || msg.includes("cost") || msg.includes("tuition")) {
    if (msg.includes("mca")) {
      const mca = collegeData.courses.MCA;
      return {
        text: `💰 **MCA Fees Structure:**\n• Per Semester: ${mca.fees}\n• Total Course Fees: ${mca.total_fees}\n• Duration: ${mca.duration}\n\nFor scholarship info, ask about scholarships!`,
        suggestions: ["MCA Eligibility", "Admissions", "Scholarship", "BCA Fees"]
      };
    }
    if (msg.includes("bca")) {
      const bca = collegeData.courses.BCA;
      return {
        text: `💰 **BCA Fees Structure:**\n• Per Semester: ${bca.fees}\n• Total Course Fees: ${bca.total_fees}\n• Duration: ${bca.duration}`,
        suggestions: ["BCA Eligibility", "Admissions", "MCA Fees"]
      };
    }
    return {
      text: `💰 **Fee Structure:**\n• MCA: ₹50,000/semester (₹2,00,000 total)\n• BCA: ₹35,000/semester (₹2,10,000 total)\n• BE: ₹45,000/semester\n\nWhich course fees would you like to know more about?`,
      suggestions: ["MCA Fees", "BCA Fees", "BE Fees", "Scholarship"]
    };
  }

  // Eligibility
  if (msg.includes("eligib") || msg.includes("qualification") || msg.includes("requirement")) {
    if (msg.includes("mca")) {
      const mca = collegeData.courses.MCA;
      return {
        text: `✅ **MCA Eligibility:**\n${mca.eligibility.map(e => `• ${e}`).join("\n")}\n\nSeats available: ${mca.seats}`,
        suggestions: ["MCA Fees", "Apply Now", "Documents Required"]
      };
    }
    return {
      text: `📋 **Eligibility Requirements:**\n• **MCA**: BCA/BSc with 50%+ marks\n• **BCA**: 12th/PUC with 45%+ marks\n• **BE**: 12th PCM with 45%+ marks`,
      suggestions: ["MCA Eligibility", "BCA Eligibility", "Admissions Process"]
    };
  }

  // Admissions
  if (msg.includes("admission") || msg.includes("apply") || msg.includes("enroll") || msg.includes("register")) {
    const adm = collegeData.admissions;
    return {
      text: `📝 **Admissions 2026 - OPEN!**\n• Last Date: ${adm.last_date}\n• Online application available\n• Online form fee: ${adm.online_admission_fee}\n• Helpdesk: ${adm.helpdesk}\n\n**Documents Required:**\n${adm.documents_required.map(d => `• ${d}`).join("\n")}`,
      suggestions: ["Documents Required", "Fees", "Eligibility", "Contact"]
    };
  }

  // Courses
  if (msg.includes("course") || msg.includes("program") || msg.includes("degree")) {
    return {
      text: `🎓 **Courses Offered at JCE:**\n• **MCA** - Master of Computer Applications (2 years)\n• **BCA** - Bachelor of Computer Applications (3 years)\n• **BE** - Bachelor of Engineering (4 years)\n  - Computer Science\n  - Electronics\n  - Mechanical\n  - Civil`,
      suggestions: ["MCA Details", "BCA Details", "BE Details", "Admissions"]
    };
  }

  // MCA
  if (msg.includes("mca")) {
    const mca = collegeData.courses.MCA;
    return {
      text: `🎓 **MCA - Master of Computer Applications**\n• Duration: ${mca.duration}\n• Fees: ${mca.fees}\n• Seats: ${mca.seats}\n• Eligibility: BCA/BSc with 50%+\n\n📚 **Subjects Include:**\n${mca.subjects.slice(0,5).map(s => `• ${s}`).join("\n")} and more...`,
      suggestions: ["MCA Eligibility", "MCA Fees", "Apply for MCA", "MCA Faculty"]
    };
  }

  // Facilities
  if (msg.includes("facilit") || msg.includes("infrastructure") || msg.includes("campus")) {
    const f = collegeData.facilities;
    return {
      text: `🏫 **Campus Facilities:**\n• 📚 Library: ${f.library}\n• 💻 Computer Lab: 150 systems\n• 🍽️ Canteen: ${f.canteen}\n• 🚌 Transport: Available\n• 📶 Wi-Fi: ${f.wifi}\n• 🏏 Sports: Cricket, Basketball, Badminton`,
      suggestions: ["Hostel", "Library", "Labs", "Sports"]
    };
  }

  // Hostel
  if (msg.includes("hostel") || msg.includes("accommodation") || msg.includes("stay")) {
    const h = collegeData.facilities.hostel;
    return {
      text: `🏠 **Hostel Facilities:**\n• Boys Hostel: ${h.boys}\n• Girls Hostel: ${h.girls}\n\n**Amenities:** ${h.facilities.join(", ")}`,
      suggestions: ["Fees", "Transport", "Canteen", "Contact"]
    };
  }

  // Placements
  if (msg.includes("placement") || msg.includes("job") || msg.includes("recruit") || msg.includes("career") || msg.includes("package")) {
    const p = collegeData.placements;
    return {
      text: `💼 **Placement Statistics:**\n• Average Package: ${p.average_package}\n• Highest Package: ${p.highest_package}\n• Placement Rate: ${p.placement_rate}\n\n🏢 **Top Recruiters:**\n${p.top_recruiters.join(", ")}`,
      suggestions: ["Courses", "About College", "Contact"]
    };
  }

  // Location / where is
  if (msg.includes("where") || msg.includes("location") || msg.includes("find") || msg.includes("office") || msg.includes("library") || msg.includes("lab")) {
    const loc = collegeData.location_map;
    if (msg.includes("library")) return { text: `📚 Library is located at: **${loc.library}**`, suggestions: ["Labs", "Principal Office", "Canteen"] };
    if (msg.includes("principal")) return { text: `👨‍💼 Principal's Office: **${loc.principal_office}**`, suggestions: ["Admissions Office", "Contact"] };
    if (msg.includes("admission")) return { text: `📝 Admissions Office: **${loc.admissions_office}**`, suggestions: ["Apply Now", "Contact", "Documents"] };
    if (msg.includes("canteen")) return { text: `🍽️ Canteen: **${loc.canteen}**\nOpen: 8 AM - 8 PM`, suggestions: ["Hostel", "Facilities"] };
    return {
      text: `📍 **Campus Locations:**\n• Library: ${loc.library}\n• Principal Office: ${loc.principal_office}\n• Admissions: ${loc.admissions_office}\n• Computer Lab: ${loc.computer_lab}\n• Canteen: ${loc.canteen}\n• Boys Hostel: ${loc.boys_hostel}\n• Girls Hostel: ${loc.girls_hostel}`,
      suggestions: ["Facilities", "Hostel", "Contact"]
    };
  }

  // Scholarship
  if (msg.includes("scholarship") || msg.includes("discount") || msg.includes("concession")) {
    const s = collegeData.scholarship;
    return {
      text: `🎖️ **Scholarship Opportunities:**\n• **Government**: ${s.government}\n• **Merit**: ${s.merit}\n• **Sports Quota**: ${s.sports}`,
      suggestions: ["Admissions", "Fees", "Contact"]
    };
  }

  // Exam / Results
  if (msg.includes("exam") || msg.includes("result") || msg.includes("schedule") || msg.includes("test")) {
    const e = collegeData.exam_schedule;
    return {
      text: `📅 **Exam Schedule:**\n• Internal Exams: ${e.internal_exams}\n• Semester Exams: ${e.semester_exams}\n• Results: ${e.results}`,
      suggestions: ["Courses", "Contact", "About College"]
    };
  }

  // Contact
  if (msg.includes("contact") || msg.includes("phone") || msg.includes("number") || msg.includes("email") || msg.includes("reach")) {
    const c = collegeData.college;
    return {
      text: `📞 **Contact Information:**\n• Phone: ${c.phone}\n• Email: ${c.email}\n• Address: ${c.address}\n\n**Admissions Helpdesk:** ${collegeData.admissions.helpdesk}\n\n🕐 Office Hours: Mon-Sat, 9 AM - 5 PM`,
      suggestions: ["Admissions", "About College", "Directions"]
    };
  }

  // Transport
  if (msg.includes("transport") || msg.includes("bus") || msg.includes("travel") || msg.includes("reach")) {
    return {
      text: `🚌 **Transport Facility:**\n• College bus available from major routes in Belagavi\n• Routes cover: City Center, Railway Station, Bus Stand\n• For route details, contact: ${collegeData.college.phone}`,
      suggestions: ["Hostel", "Facilities", "Contact"]
    };
  }

  // Faculty
  if (msg.includes("faculty") || msg.includes("teacher") || msg.includes("professor") || msg.includes("staff")) {
    return {
      text: `👨‍🏫 **Faculty Information:**\n• MCA Department: ${collegeData.departments.MCA_dept.faculty_count} qualified faculty members\n• All faculty are industry-experienced\n• Research active faculty with publications\n\nFor specific faculty details, please visit the college or contact us.`,
      suggestions: ["Courses", "Contact", "About College"]
    };
  }

  // Default fallback
  return {
    text: `I'm not sure about that specific query. I can help you with information about:\n\n• 📚 Courses (MCA, BCA, BE)\n• 💰 Fee Structure\n• 📝 Admissions Process\n• 🏫 Campus Facilities\n• 💼 Placements\n• 🏠 Hostel\n• 📅 Exam Schedule\n• 🎖️ Scholarships\n• 📞 Contact Information\n\nWhat would you like to know?`,
    suggestions: ["Courses", "Fees", "Admissions", "Facilities", "Contact"]
  };
}

module.exports = { collegeData, getChatbotResponse };
