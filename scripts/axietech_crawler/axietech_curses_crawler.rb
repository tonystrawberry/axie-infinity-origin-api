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

driver.get('https://www.axie.tech/explorer/curses/')
sleep 5

card_container_class = "css-pc34r7"
card_art_class = "css-6ittl2"
card_name_class = "css-rutoue"
card_tags_class = "css-pwvi8c"
card_description_class = "css-yl33fo"

cards = driver.find_elements(class_name: card_container_class)

curses_infos = []

cards.each do |card|
  art_element = card.find_element(class_name: card_art_class)
  art_element = art_element.find_element(tag_name: 'img')
  art_src = art_element.attribute('src')
  curse_id = art_src.split('/')[-1].split('.')[0]

  puts "art_src #{art_src}"
  open(art_src) do |image|
    File.open("images/curses/arts/#{curse_id}.jpg", "wb") do |file|
      file.write(image.read)
    end
  end

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

  curses_infos << {
    id: curse_id,
    name: name,
    abilities: abilities,
    description: description,
  }

  puts "name #{name}"
end

File.open("output/originCurses.json", "w") do |f|
  f.write(curses_infos.to_json)
end

# ドライバーを閉じる
driver.quit
