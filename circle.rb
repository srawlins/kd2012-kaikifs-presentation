f=ARGV.shift.to_i  # fractions of 360deg, like 12
r=ARGV.shift.to_i  # radius of this giant circle

(0..12).each { |i|
  a=-Math::PI*2 * i/f
  puts "#{i}: #{3700+(Math.sin(a)*r).round}, #{5500+(Math.cos(a)*r).round}, #{(a*180/Math::PI).round}"
}
