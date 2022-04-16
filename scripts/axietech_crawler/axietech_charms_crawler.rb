require 'selenium-webdriver'
require "csv"
require 'active_support'
require 'active_support/core_ext'
require "open-uri"
require "fileutils"

@wait_time = 3
@timeout = 4

Selenium::WebDriver.logger.output = File.join("./", "selenium.log")
Selenium::WebDriver.logger.level = :warn
driver = Selenium::WebDriver.for :chrome
driver.manage.timeouts.implicit_wait = @timeout
wait = Selenium::WebDriver::Wait.new(timeout: @wait_time)

driver.get('https://www.axie.tech/explorer/charms/')
sleep 5

card_container_class = "css-pc34r7"
card_background_class = "css-ne5mje"
card_art_class = "css-18vlpi1"
card_value_class = "css-s6kp76"
values_classes = [card_value_class]

card_name_class = "css-1xogak9"
card_description_class = "css-wwamzm"

cards = driver.find_elements(class_name: card_container_class)

cards_infos = []

cards.each do |card|
  background_element = card.find_element(class_name: card_background_class)
  background_element = background_element.find_element(tag_name: 'img')
  class_name = background_element.attribute('src').split('/')[-1].split('.')[0]
  puts "background_element #{}"
  puts "background_element.attribute('src') #{background_element.attribute('src')}"
  puts "class_name - #{class_name}"

  art_element = card.find_element(class_name: card_art_class)
  art_element = art_element.find_element(tag_name: 'img')
  art_src = art_element.attribute('src')
  charm_id = art_src.split('/')[-1].split('.')[0]

  puts "art_src #{art_src}"
  open(art_src) do |image|
    File.open("images/charms/arts/#{charm_id}.png", "wb") do |file|
      file.write(image.read)
    end
  end

  value_element = nil
  values_classes.each do |value_class|
    begin
      value_element = card.find_element(class_name: value_class)
      break
    rescue
      next
    end
  end
    
  if value_element.present?
    value = value_element.text.to_i
  else
    value = 0
  end

  name_element = card.find_element(class_name: card_name_class)
  name = name_element.text

  description = nil
  begin
    description_element = card.find_element(class_name: card_description_class)
    description = description_element.text
  rescue
    
  end

  cards_infos << {
    id: charm_id,
    class: class_name,
    name: name,
    value: value,
    description: description,
  }

  puts "name #{name}"
end

File.open("output/originCharms.json", "w") do |f|
  f.write(cards_infos.to_json)
end

# ドライバーを閉じる
driver.quit
