import { motion } from 'framer-motion';
import Card from '@/components/ui/Card';
import { FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Thant Zin',
      role: 'University Student',
      image: '👨‍🎓',
      rating: 5,
      text: 'Korean With Us helped me achieve TOPIK Level 4! The teachers are amazing and the cultural activities made learning so enjoyable.',
    },
    {
      name: 'Ei Phyu Sin',
      role: 'Working Professional',
      image: '👩‍💼',
      rating: 5,
      text: 'I got my dream job in a Korean company thanks to the business Korean course. The speaking practice sessions were incredibly helpful.',
    },
    {
      name: 'Kyaw Zin Htun',
      role: 'K-pop Enthusiast',
      image: '🎵',
      rating: 5,
      text: 'Now I can understand K-dramas without subtitles! The beginner course was perfect for someone like me who started from zero.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-4"
          >
            Student <span className="text-cherry-600">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Hear from our successful students who have achieved their Korean language goals with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;