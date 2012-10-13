f=ARGV.shift.to_i  # fractions of 360deg, like 12
r=ARGV.shift.to_i  # radius of this giant circle

(0..f).each { |i|
  a=-Math::PI*2 * i/f
  puts "%2d: " % i +
    "#{4000+r+(Math.cos(a)*r).round}, "+
    "#{2200+r + (Math.sin(a)*r).round}, "+
    "%4d" % (a*180/Math::PI).round
}
