// Simulasi API Calls (Akan diganti fetch() oleh tim Backend nanti)
const API = {
    getExcellence: async () => DB.excellence,
    getLevels: async () => DB.levels,
    getPrograms: async () => DB.programs,
    getFacilities: async () => DB.facilities,
    getAchievements: async () => DB.achievements,
    getNews: async () => DB.news,
    getTestimonials: async () => DB.testimonials,
    getPartners: async () => DB.partners
};