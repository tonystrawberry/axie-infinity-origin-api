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

driver.get('https://www.axie.tech/explorer/cards/')
sleep 5

card_container_class = "css-1kzum0"
card_background_class = "css-1updcms"
card_art_class = "css-6ittl2"
card_shield_value_class = "css-m4mf9z"
card_attack_value_class = "css-1av4sdf"
card_heal_value_class = "css-m4mf9z"
values_classes = [card_shield_value_class, card_attack_value_class, card_heal_value_class]

card_energy_cost_class = "css-1r5yif9"
card_part_class = "css-tkpuj4"
card_name_class = "css-1l7dxiv"
card_tags_class = "css-eve98c"
card_description_class = "css-27qj5v"

cards = driver.find_elements(class_name: card_container_class)

cards_infos = []

cards.each do |card|
  background_element = card.find_element(class_name: card_background_class)
  background_element = card.find_element(tag_name: 'img')
  class_name = background_element.attribute('src').split('/')[-1].split('.')[0]

  art_element = card.find_element(class_name: card_art_class)
  art_element = art_element.find_element(tag_name: 'img')
  art_src = art_element.attribute('src')
  card_id = art_src.split('/')[-1].split('.')[0]

  # puts "art_src #{art_src}"
  # open(art_src) do |image|
  #   File.open("arts/#{card_id}.jpg", "wb") do |file|
  #     file.write(image.read)
  #   end
  # end

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
    value_img_element = value_element.find_element(tag_name: 'img')
    value_span_element = value_element.find_element(tag_name: 'span')
    effect = value_img_element.attribute('src').split('/')[-1].split('.')[0]
    value = value_span_element.text
  else
    effect = nil
    value = 0
  end

  energy_cost_element = card.find_element(class_name: card_energy_cost_class)
  energy_cost = energy_cost_element.text

  part_element = card.find_element(class_name: card_part_class)
  part_element = part_element.find_elements(tag_name: 'img')[1]
  part = part_element.attribute('src').split('/')[-1].split('.')[0]

  name_element = card.find_element(class_name: card_name_class)
  name = name_element.text

  tags_element = card.find_element(class_name: card_tags_class)
  tags_img_elements = tags_element.find_elements(tag_name: 'img')
  abilities = []
  tags_img_elements.each do |tags_img_element|
    tag = tags_img_element.attribute('src').split('/')[-1].split('.')[0]
    abilities << tag
  end

  description = nil
  begin
    description_element = card.find_element(class_name: card_description_class)
    description = description_element.text
  rescue
    
  end

  cards_infos << {
    id: card_id,
    class: class_name,
    part: part,
    energyCost: energy_cost,
    name: name,
    value: value,
    effect: effect,
    description: description,
    abilities: abilities
  }

  puts "name #{name}"
end

File.open("output/originCards.json", "w") do |f|
  f.write(cards_infos.to_json)
end

# ドライバーを閉じる
driver.quit
