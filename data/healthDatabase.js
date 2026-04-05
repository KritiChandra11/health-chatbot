/**
 * Health Assistant - Rich Health Information Database
 * Contains structured recommendations for common health topics
 */

const healthDatabase = {
  cold: {
    topic: 'Common Cold',
    advice: 'The common cold is a viral infection that typically resolves within 7-10 days. Focus on symptom management and supporting your immune system.',
    recommendations: [
      {
        type: 'step',
        title: 'Hydration & Rest',
        content: 'Drink plenty of water, herbal tea, or warm lemon water with honey. Get 7-9 hours of sleep to help your body fight the infection.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Hydration helps loosen congestion and prevents dehydration. Rest allows your immune system to focus energy on fighting the virus.'
      },
      {
        type: 'step',
        title: 'Symptom Relief',
        content: 'Use over-the-counter decongestants or saline nasal drops. Gargle with salt water for a sore throat. Use a humidifier to ease congestion.'
      },
      {
        type: 'warning',
        title: 'When to Seek Care',
        content: 'Contact a doctor if symptoms persist beyond 10 days, if you develop a high fever (>103°F), or experience difficulty breathing.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'Most colds are viral and don\'t require antibiotics. Antibiotics are only effective against bacterial infections. Consult your doctor if symptoms worsen.'
      }
    ]
  },

  headache: {
    topic: 'Headache Relief',
    advice: 'Headaches can have various causes including tension, dehydration, stress, or caffeine withdrawal. Many can be managed with lifestyle changes and over-the-counter options.',
    recommendations: [
      {
        type: 'step',
        title: 'Immediate Relief',
        content: 'Drink water first - dehydration is a common cause. Rest in a quiet, dark room. Apply a cold compress to your forehead or a warm compress to neck muscles.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Cold temps constrict blood vessels reducing pain, while warmth relaxes tense muscles. Quiet reduces sensory stimulation that triggers migraines.'
      },
      {
        type: 'step',
        title: 'Preventive Measures',
        content: 'Maintain regular sleep schedule, manage stress through meditation, limit caffeine, eat regular meals, and stay active with light exercise.'
      },
      {
        type: 'warning',
        title: 'Be Alert',
        content: 'Seek immediate care for sudden severe headaches, headaches with fever/stiff neck, vision changes, or headaches following a head injury.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'Over-the-counter pain relievers like acetaminophen or ibuprofen are effective for most headaches. Consult if headaches are frequent or severe.'
      }
    ]
  },

  anxiety: {
    topic: 'Anxiety Management',
    advice: 'Anxiety is a normal response to stress, but when it becomes overwhelming, various strategies and techniques can help you regain control and feel calmer.',
    recommendations: [
      {
        type: 'step',
        title: '4-7-8 Breathing',
        content: 'Breathe in for 4 counts, hold for 7 counts, exhale for 8 counts. Repeat 4 times. This activates your parasympathetic nervous system to calm your body.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Controlled breathing reduces cortisol (stress hormone) and activates relaxation response. It gives your mind something focused to do, breaking anxiety cycles.'
      },
      {
        type: 'step',
        title: 'Daily Practices',
        content: 'Exercise 30 minutes daily, practice meditation or mindfulness, limit caffeine and sugar, maintain social connections, and establish a consistent sleep routine.'
      },
      {
        type: 'warning',
        title: 'Know Your Limits',
        content: 'If anxiety significantly impacts daily activities, work, or relationships, or if you have thoughts of self-harm, professional help is essential.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'Consider speaking with a therapist (CBT is highly effective) or your doctor if self-help strategies aren\'t sufficient. Treatment options include therapy or medication.'
      }
    ]
  },

  digestion: {
    topic: 'Digestive Health',
    advice: 'Good digestion starts with proper habits and food choices. Most digestive issues can be improved with dietary adjustments and lifestyle changes.',
    recommendations: [
      {
        type: 'step',
        title: 'Dietary Adjustments',
        content: 'Eat slowly and chew thoroughly (20+ times per bite). Include fiber-rich foods gradually. Drink water between meals, not during. Limit fatty and spicy foods.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Thorough chewing starts digestion in your mouth. Fiber aids bowel regularity. Proper hydration supports all digestive processes. Smaller portions prevent overload.'
      },
      {
        type: 'step',
        title: 'Lifestyle Changes',
        content: 'Eat regular meals at consistent times. Stay active with daily movement. Manage stress through relaxation. Avoid eating 3 hours before bed.'
      },
      {
        type: 'warning',
        title: 'Red Flags',
        content: 'Seek medical attention for persistent pain, blood in stool, unexplained weight loss, chronic diarrhea/constipation lasting >2 weeks, or signs of dehydration.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'If symptoms persist beyond 2 weeks despite lifestyle changes, see a doctor for evaluation. Conditions like GERD, IBS, or infections may require professional treatment.'
      }
    ]
  },

  fever: {
    topic: 'Fever Management',
    advice: 'Fever is often your body\'s helpful response to fighting an infection. Focus on comfort and monitoring unless the fever becomes dangerously high.',
    recommendations: [
      {
        type: 'step',
        title: 'Comfort Measures',
        content: 'Rest in bed to conserve energy for fighting infection. Stay hydrated with water, broth, or electrolyte drinks. Wear light clothing; don\'t bundle up.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Rest allows immune system to focus entirely on fighting the infection. Hydration replaces fluids lost through sweating. Light clothing prevents dangerous overheating.'
      },
      {
        type: 'step',
        title: 'Temperature Management',
        content: 'Take your temperature every 4 hours. Use cool compresses on forehead. Take lukewarm (not cold) baths. Use over-the-counter fever reducers if very uncomfortable.'
      },
      {
        type: 'warning',
        title: 'Emergency Signs',
        content: 'Seek immediate care for fever >103°F, signs of dehydration (dry mouth, dizziness), severe weakness, confusion, difficulty breathing, or chest pain.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'Most fevers resolve naturally within 3-4 days. Consult a doctor if fever lasts >3 days, returns after improving, or occurs with other concerning symptoms.'
      }
    ]
  },

  sleep: {
    topic: 'Sleep & Insomnia',
    advice: 'Quality sleep is essential for health. If you\'re struggling to sleep, simple adjustments to your routine and environment can make a significant difference.',
    recommendations: [
      {
        type: 'step',
        title: 'Sleep Hygiene Routine',
        content: 'Go to bed and wake at the same time daily. Keep bedroom cool (60-67°F), dark, and quiet. Remove screens 1 hour before bed. Avoid caffeine after 2 PM.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Consistency regulates your natural circadian rhythm. Cool, dark rooms optimize sleep physiology. Blue light from screens suppresses melatonin production.'
      },
      {
        type: 'step',
        title: 'Pre-Sleep Ritual',
        content: 'Create a calming 30-minute wind-down routine: read, journal, gentle stretching, or meditation. Keep bedroom reserved for sleep, not work or entertainment.'
      },
      {
        type: 'warning',
        title: 'Unhelpful Practices',
        content: 'Avoid alcohol as a sleep aid (it disrupts sleep stages), napping >30 min during day, heavy meals close to bedtime, and intense exercise within 3 hours of sleep.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'If sleep problems persist >2 weeks despite lifestyle changes, consult your doctor. Sleep disorders like sleep apnea may require professional evaluation.'
      }
    ]
  },

  stress: {
    topic: 'Stress Management',
    advice: 'Chronic stress impacts physical and mental health. Implementing stress-reduction techniques can improve your overall well-being and resilience.',
    recommendations: [
      {
        type: 'step',
        title: 'Immediate De-Stress',
        content: 'Take 5 deep breaths, go for a 10-minute walk, splash cold water on your face, or do 2 minutes of stretching. These provide quick physiological relief.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Deep breathing activates your parasympathetic nervous system (relaxation response). Movement releases endorphins. Physical activities interrupt stress cycles.'
      },
      {
        type: 'step',
        title: 'Daily Practices',
        content: 'Exercise 30 min daily, meditate or practice mindfulness, journal thoughts and feelings, set boundaries on work/emails, and maintain hobbies you enjoy.'
      },
      {
        type: 'warning',
        title: 'Warning Signs',
        content: 'Chronic stress can lead to depression, anxiety disorders, high blood pressure, and weakened immunity. If stress feels unmanageable, seek professional support.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'Consider therapy (especially CBT) or stress management programs. Your doctor can help rule out physical causes and discuss treatment options if needed.'
      }
    ]
  },

  nausea: {
    topic: 'Nausea & Vomiting',
    advice: 'Nausea can have various causes from food to motion to anxiety. Many cases improve with simple dietary and environmental adjustments.',
    recommendations: [
      {
        type: 'step',
        title: 'Immediate Relief',
        content: 'Sip clear fluids slowly (water, ginger ale, broth). Eat small amounts of bland foods (crackers, toast, rice). Sit upright or elevate your head for 30 minutes.'
      },
      {
        type: 'why',
        title: 'Why it Helps',
        content: 'Small sips prevent stomach overload. Bland foods are easy to digest. Upright position uses gravity to aid digestion and reduce stomach irritation.'
      },
      {
        type: 'step',
        title: 'Preventive Measures',
        content: 'Eat regular small meals rather than large ones. Avoid strong smells. Try ginger tea or peppermint. Get fresh air. Avoid sudden movements if motion-triggered.'
      },
      {
        type: 'warning',
        title: 'Danger Signs',
        content: 'Seek medical attention for persistent vomiting >2 hours, signs of dehydration, vomiting blood, abdominal pain, or if nausea follows an injury.'
      },
      {
        type: 'doctor',
        title: 'Doctor Recommendation',
        content: 'If nausea persists >2 days, prevents eating, or accompanies other symptoms, see a doctor. Various conditions require professional diagnosis and treatment.'
      }
    ]
  }
};

module.exports = healthDatabase;
