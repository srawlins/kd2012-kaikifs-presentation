f=ARGV.shift.to_i  # fractions of 90deg, like 12
r=ARGV.shift.to_i  # radius of this giant circle

(-6..9).each { |i|
  a=Math::PI/2 * i/f
  puts "#{i}: #{500-(0.33*Math.sin(a)*r).round}, #{(Math.cos(a)*r).round}, #{a*180/Math::PI-90}"
}
