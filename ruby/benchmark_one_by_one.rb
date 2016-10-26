require 'benchmark'

n = 1_000_000

class User
  #class method
  def self.roles(level)
    { roles: level }
  end

  #instance method
  def initialize(level)
    @level = level
  end

  def roles
    { roles: @level }
  end
end

User.roles("admin") #class method
User.new("admin").roles #instance method

