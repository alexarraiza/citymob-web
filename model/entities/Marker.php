<?php
class Marker
{
	private $id_auto;
	private $coord;
	private $title;
	private $description;
	private $on_date;
	private $off_date;
	private $active;
	private $id_marker_type;
	
	public function getId() {
		return $this->id_auto;
	}
	
	public function getCoord() {
		return $this->coord;
	}
	
	public function setCoord($coord) {
		$this->coord = $coord;
	}
	
	public function getTitle() {
		return $this->title;
	}
	
	public function setTitle($title) {
		$this->title = $title;
	}
	
	public function getDescription() {
		return $this->description;
	}
	
	public function setDescription($description) {
		$this->description = $description;
	}
	
	public function getOnDate() {
		return $this->on_date;
	}
	
	public function SetOnDate($onDate) {
		$this->on_date = $onDate;
	}
	
	public function getOffDate() {
		return $this->off_date;
	}
	
	public function setOffDate($offDate) {
		$this->off_date = $offDate;
	}
	
	public function getActive() {
		return $this->active;
	}
	
	public function setActive($active) {
		$this->active = $active;
	}
	
	public function getIdMarkerType() {
		return $this->id_marker_type;
	}
	
	public function setIdMarkerType($idMarkerType) {
		$this->id_marker_type = $idMarkerType;
	}
}