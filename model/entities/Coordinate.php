<?php
class Coordinate
{
	private $lat;
	private $lon;
	
	public function __construct($lat, $lon) {
		$this->lat = $lat;
		$this->lon = $lon;
	}
	
	public function getLat() {
		return $this->lat;
	}
	
	public function getLon() {
		return $this->lon;
	}
	
	public function getCoords():array {
		return array("lat" => $this->lat, "lon" => $this->lon);
	}
}