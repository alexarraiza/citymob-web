<?php
interface ICityMob {
	public function addMarker(Coordinate $coord, $title, $description, $markerType);
	public function removeMarker($idMarker);
	
}