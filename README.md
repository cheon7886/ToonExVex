# ToonExVex
Simple Image Crawling Example

## Requirement

Install **PhantomJS, CasperJS**

## Usage

```
sudo casperjs crawl_contents.js --dst=name_to_create --id=target_toon_id --no=first_to_no
```
**dst** option : In general, numerous images are gathered after the crawling process. so you should fill the name of folder which to create.    
**id** option : To find the target Webtoon, Enter the toon page and get the toon ID from the URL.    
**no** option : This code get the images from first chapter of the toon to specified chapter No.
