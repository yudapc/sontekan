#!/usr/bin/env ruby

$LOAD_PATH.unshift '.'
require 'animal'

class Dog
  include Animal

  def initialize(name, sex = "male")
    @name ||= name
    @sex  ||= sex
  end

  def gug
    puts "He will gug gug gug"
  end
end

dog = Dog.new('blacky')
dog.gug
dog.run
dog.male?
